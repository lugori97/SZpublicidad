import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// interface Story {
//   id: number;
//   title: string;
//   image: string;
// }

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

    stories = [
      {
        username: 'user1',
        profilePic: 'assets/images/brands/cafe-logo1.webp',
        story: 'assets/images/brands/cafe-logo1.webp'
      },
      {
        username: 'user2',
        profilePic: 'assets/images/brands/cafe-logo1.webp',
        story: 'assets/images/posts/test.png'
      },
      {
        username: 'user3',
        profilePic: 'assets/images/brands/cafe-logo1.webp',
        story: 'assets/images/posts/test.png'
      }
    ];
    scrollLeft() {
      const container = document.querySelector('containerr') as HTMLElement;
      container.scrollLeft -= 200;
    }

    scrollRight() {
      const container = document.querySelector('.containerr') as HTMLElement;
      container.scrollLeft += 200;
    }

  // openStory(story) {
  //   const dialogRef = this.dialog.open(StoryModalComponent, {
  //     width: '80%',
  //     height: '80%',
  //     data: story
  //   });
  // }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
