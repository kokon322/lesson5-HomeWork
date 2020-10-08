import { Component, OnInit } from '@angular/core';
import {IComment} from '../../interface/comment.interface';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  allComments: IComment[];

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.allComments = value);
  }

}
