import { Component} from '@angular/core';
import { PageComponent } from '../main/page.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent extends PageComponent{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  available_games = [
    {
      'title' : 'AEC CTF 2020',
      'date'  : 'December 19th, 2020',
      'state' : {
        'deploy' : 'Online',
        'complete' : 'Completed'
      },
      'description' : "The CTF is over, but the challenges are still available! Please join the Discord channel (link below) if you have any questions or want to join our community!<br><br> This is MetaCTF's 6th annual competition!  <br><br> Whether you're a high school student or a seasoned industry professional, all are welcome to participate! The CTF will begin at 12pm on October 24th, 2020 (Eastern Time) and last 24 hours. There will be over $5,000 in prizes for top teams in both student and non-student tiers.<br><br> Join our Discord server here: <a href='https://discord.gg/yyKCWnb'>https://discord.gg/yyKCWnb</a>",
      'visibility'  : 'Private',
      'profil_type' : 'Professional'
    },
    {
      'title' : 'AEC CTF 2021',
      'date'  : 'January 4th, 2021',
      'state' : {
        'deploy' : 'Online',
        'complete' : 'Alive'
      },
      'description' : "The CTF is over, but the challenges are still available! Please join the Discord channel (link below) if you have any questions or want to join our community!<br><br> This is MetaCTF's 6th annual competition!  <br><br> Whether you're a high school student or a seasoned industry professional, all are welcome to participate! The CTF will begin at 12pm on October 24th, 2020 (Eastern Time) and last 24 hours. There will be over $5,000 in prizes for top teams in both student and non-student tiers.<br><br> Join our Discord server here: <a href='https://discord.gg/yyKCWnb'>https://discord.gg/yyKCWnb</a>",
      'visibility'  : 'Private',
      'profil_type' : 'Student'
    }
  ]

  your_games = [
    {
      'title' : 'AEC CTF 2020',
      'date'  : 'December 19th, 2020',
      'state' : {
        'deploy' : 'Online',
        'complete' : 'Completed'
      },
      'description' : "The CTF is over, but the challenges are still available! Please join the Discord channel (link below) if you have any questions or want to join our community!<br><br> This is MetaCTF's 6th annual competition!  <br><br> Whether you're a high school student or a seasoned industry professional, all are welcome to participate! The CTF will begin at 12pm on October 24th, 2020 (Eastern Time) and last 24 hours. There will be over $5,000 in prizes for top teams in both student and non-student tiers.<br><br> Join our Discord server here: <a href='https://discord.gg/yyKCWnb'>https://discord.gg/yyKCWnb</a>",
      'team'  : 'SCRIPT0',
      'profil_type' : 'Professional',
      'email' : 'bisaac@gmail.com',
      'join_code' : '@ts0216#01Isaac'
    },
    {
      'title' : 'AEC CTF 2021',
      'date'  : 'January 4th, 2021',
      'state' : {
        'deploy' : 'Offline',
        'complete' : 'Alive'
      },
      'description' : "The CTF is over, but the challenges are still available! Please join the Discord channel (link below) if you have any questions or want to join our community!<br><br> This is MetaCTF's 6th annual competition!  <br><br> Whether you're a high school student or a seasoned industry professional, all are welcome to participate! The CTF will begin at 12pm on October 24th, 2020 (Eastern Time) and last 24 hours. There will be over $5,000 in prizes for top teams in both student and non-student tiers.<br><br> Join our Discord server here: <a href='https://discord.gg/yyKCWnb'>https://discord.gg/yyKCWnb</a>",
      'team'  : 'EX01A',
      'profil_type' : 'Student',
      'email' : 'bekolleisaac@gmail.com',
      'join_code' : ''
    }
  ]

  compete = (event : Event) : boolean =>{
    event.stopPropagation();
    return false;
  }
}
