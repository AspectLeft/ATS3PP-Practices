import { Component, OnInit } from '@angular/core';
import {TodoItemQuery} from '../../types/TodoItemQuery';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import { ITodoItem } from '../../../../../common/models/TodoItem';
import {SubscriptionBase} from '../../types/SubscriptionBase';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent extends SubscriptionBase implements OnInit {

  constructor(apollo: Apollo) {
    super(apollo);
  }

  ngOnInit() {
    this.Subscribe<TodoItemQuery>(gql`query ItemsQuery {
      TodoItems {
        Id,
        Title,
        Description,
        DaysCreated,
        DueDate,
        Completed
      }
    }`).subscribe(todo => {
      this.todos = new Array<ITodoItem>();
      todo.data.TodoItems.forEach(x => {
        this.todos.push(x);
      });
    });
  }
}
