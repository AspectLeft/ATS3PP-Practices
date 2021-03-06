enum TagType {
    Paragraph,
    Header1,
    Header2,
    Header3,
    Header4,
    Header5,
    Header6,
    HorizontalRule
}

class TagTypeToHtml {
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();

    constructor() {
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Header4, "h4");
        this.tagType.set(TagType.Header5, "h5");
        this.tagType.set(TagType.Header6, "h6");
        this.tagType.set(TagType.Paragraph, "p");
        this.tagType.set(TagType.HorizontalRule, "hr");
    }

    private GetTag(tagType: TagType, openingTagPattern: string): string {
        let tag = this.tagType.get(tagType);
        if (tag != null) {
            return `${openingTagPattern}${tag}>`;
        }
        return `${openingTagPattern}p>`;
    }

    public OpeningTag(tagType: TagType): string {
        return this.GetTag(tagType, '<');
    }

    public ClosingTag(tagType: TagType): string {
        return this.GetTag(tagType, '</');
    }
}

interface IMarkdownDocument {
    Add(...content: string[]): void;
    Get(): string;
}

class MarkdownDocument implements IMarkdownDocument {
    private content: string = "";

    Add(...content: string[]): void {
        content.forEach(element => {
            this.content += element;
        });
    }

    Get(): string {
        return this.content;
    }
}

class ParseElement {
    CurrentLine: string = "";
}

interface IVisitor {
    Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void;
}

interface IVisitable {
    Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument): void;
}

abstract class VisitorBase implements IVisitor{
    constructor(private readonly tagType: TagType, private readonly TagTypeToHtml: TagTypeToHtml) {}

    Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void {
        markdownDocument.Add(this.TagTypeToHtml.OpeningTag(this.tagType), token.CurrentLine,
            this.TagTypeToHtml.ClosingTag(this.tagType));
    }
}

class Header1Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header1, new TagTypeToHtml());
    }
}

class Header2Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header2, new TagTypeToHtml());
    }
}

class Header3Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header3, new TagTypeToHtml());
    }
}

class Header4Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header4, new TagTypeToHtml());
    }
}
class Header5Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header5, new TagTypeToHtml());
    }
}
class Header6Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header6, new TagTypeToHtml());
    }
}

class ParagraphVisitor extends VisitorBase {
    constructor() {
        super(TagType.Paragraph, new TagTypeToHtml());
    }
}

class HorizontalRuleVisitor extends VisitorBase {
    constructor() {
        super(TagType.HorizontalRule, new TagTypeToHtml());
    }
}

class Visitable implements IVisitable {
    Accept(visitor: IVisitor, token: ParseElement, markdownDocument: IMarkdownDocument): void {
        visitor.Visit(token, markdownDocument);
    }
}

abstract class Handler<T> {
    protected next: Handler<T> | null = null;
    public SetNext(next: Handler<T>) : void {
        this.next = next;
    }

    public HandleRequest(req: T): void {
        if (!this.CanHandle(req)) {
            if (this.next !== null) {
                this.next.HandleRequest(req);
            }
            return;
        }
    }

    protected readonly visitable: IVisitable = new Visitable();
    protected abstract CanHandle(req: T): boolean;
}

class ParseChainHandler extends Handler<ParseElement> {

    constructor(private readonly document: IMarkdownDocument,
                private readonly tagType: string,
                private readonly visitor: IVisitor) {
        super();
    }

    protected CanHandle(req: ParseElement): boolean {
        let split = new LineParser().Parse(req.CurrentLine, this.tagType);
        if (split[0]) {
            req.CurrentLine = split[1];
            this.visitable.Accept(this.visitor, req, this.document);
        }
        return split[0];
    }
}

class ParagraphHandler extends Handler<ParseElement> {
    private readonly visitor: IVisitor = new ParagraphVisitor();

    constructor(private readonly document: IMarkdownDocument) {
        super();
    }

    protected CanHandle(req: ParseElement): boolean {
        this.visitable.Accept(this.visitor, req,this.document);
        return true;
    }
}

class Header1ChainHandler extends ParseChainHandler {
    constructor(document: IMarkdownDocument) {
        super(document, "# ", new Header1Visitor());
    }
}

class Header2ChainHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "## ", new Header2Visitor());
    }
}

class Header3ChainHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "### ", new Header3Visitor());
    }
}

class Header4ChainHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "#### ", new Header4Visitor());
    }
}
class Header5ChainHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "##### ", new Header5Visitor());
    }
}
class Header6ChainHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "###### ", new Header6Visitor());
    }
}

class HorizontalRuleHandler extends ParseChainHandler {
    constructor(document : IMarkdownDocument) {
        super(document, "---", new HorizontalRuleVisitor());
    }
}

class LineParser {
    public Parse(value: string, tag: string): [boolean, string] {
        let output: [boolean, string] = [false, ""];
        output[1] = value;
        if (value === "") {
            return output;
        }
        let split = value.startsWith(`${tag}`);
        if (split) {
            output[0] = true;
            output[1] = value.substr(tag.length);
        }
        return output;
    }
}

class ChainOfResponsibilityFactory {
    Build(document: IMarkdownDocument): ParseChainHandler {
        let head1: Header1ChainHandler = new Header1ChainHandler(document);
        let head2: Header2ChainHandler = new Header2ChainHandler(document);
        let head3: Header3ChainHandler = new Header3ChainHandler(document);
        let head4: Header4ChainHandler = new Header4ChainHandler(document);
        let head5: Header5ChainHandler = new Header5ChainHandler(document);
        let head6: Header6ChainHandler = new Header6ChainHandler(document);
        let horizontalRule: HorizontalRuleHandler = new HorizontalRuleHandler(document);
        let paragraph: ParagraphHandler = new ParagraphHandler(document);

        head1.SetNext(head2);
        head2.SetNext(head3);
        head3.SetNext(head4);
        head4.SetNext(head5);
        head5.SetNext(head6);
        head6.SetNext(horizontalRule);
        horizontalRule.SetNext(paragraph);

        return head1;
    }
}

class Markdown {
    public ToHtml(text: string): string {
        let document: IMarkdownDocument = new MarkdownDocument();
        let header1: Header1ChainHandler = new ChainOfResponsibilityFactory().Build(document);
        let lines: string[] = text.split('\n');
        for (let index = 0; index < lines.length; ++index) {
            let parseElement: ParseElement = new ParseElement();
            parseElement.CurrentLine = lines[index];
            header1.HandleRequest(parseElement);
        }
        return document.Get();
    }
}

function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

class HtmlHandler {
    private markdownChange: Markdown = new Markdown();

    public TextChangeHandler(id: string, output: string): void {
        let markdown = <HTMLTextAreaElement>document.getElementById(id);
        let markdownOutput = <HTMLLabelElement>document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = (e) => {
                this.RenderHtmlContent(markdown, markdownOutput);
            };
            markdown.onpaste = (e) => {
                this.RenderHtmlContent(markdown, markdownOutput);
            };
            window.onload = () => {
                this.RenderHtmlContent(markdown, markdownOutput);
            };
        }
    }

    private RenderHtmlContent(markdown: HTMLTextAreaElement, markdownOutput: HTMLLabelElement) {
        if (markdown.value) {
            markdownOutput.innerHTML = this.markdownChange.ToHtml(escapeHtml(markdown.value));
        }
        else {
            markdownOutput.innerHTML = "<p></p>";
        }
    }
}
