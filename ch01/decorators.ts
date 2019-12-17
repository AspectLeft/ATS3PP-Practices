interface IDecoratorExample {
    AnyoneCanRun(args: string): void;
    AdminOnly(args: string): void;
}

class DecoratedExampleMethodDecoration implements IDecoratorExample {
    @Role("admin")
    AdminOnly(args: string): void {
        console.log(args);
    }

    @Role("user")
    AnyoneCanRun(args: string): void {
        console.log(args);
    }
}

let currentUser = {user: 'peter', roles: [{role: 'user'}, {role: 'admin'}]};

function IsInRole(role: string): boolean {
    return currentUser.roles.some(r => r.role === role);
}

function Role(role: string) {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the ${role} role`);
        };
        return descriptor;
    }
}
