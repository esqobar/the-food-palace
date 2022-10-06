import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags:Tag[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getAllTags();
  }

  getAllTags() {
    this.foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    })
  }

}
