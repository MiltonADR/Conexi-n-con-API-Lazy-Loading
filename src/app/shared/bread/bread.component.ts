import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css'],
})
export class BreadComponent implements OnInit {
  @Input() titulo: string;

  constructor(private router: Router) {}

  ngOnInit() {}
}
