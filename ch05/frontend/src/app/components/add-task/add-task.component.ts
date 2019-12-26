import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { ITodoItemInput } from '../../../../../common/models/ITodoItemInput';
import {TodoItemInput} from '../../types/TodoItemInput';
import {Guid} from 'guid-typescript';
import gql from 'graphql-tag';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  EarliestDate: Date;

  Title: string;
  Description?: string;
  DueDate: Date;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.EarliestDate = new Date();
  }

  Add(): void {
    const todo: ITodoItemInput = new TodoItemInput();
    todo.Completed = false;
    todo.Id = Guid.create().toString();
    todo.CreationDate = new Date();
    todo.Title = this.Title;
    todo.Description = this.Description;
    todo.DueDate = this.DueDate;

    this.apollo.mutate({
      mutation: gql`
        mutation Add($input: TodoItemInput!) {
          Add(TodoItem: $input) {
            Title
          }
        }
      `, variables: {
        input: todo
      }
    }).subscribe();
  }

  private Reset(): void {
    this.Title = ``;
    this.Description = ``;
    this.DueDate = null;
  }
}
