import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FamilymembersService} from '../services/familymembers.service';
import {MaskService} from '../services/mask.service';
import {FamilyMembers} from '../FamilyMembers';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user = {};
  member: FamilyMembers = new FamilyMembers();
  buttonText: any = "Back";
  buttonIcon: any = "arrow-back";
  familyMembersFromDb: any;
  isWantCreateMemberFamily = false;
  familyMembersCreateValidator: any;
  private isLoading: boolean = false;

  constructor(private familymembersService: FamilymembersService,
              private userService: UserService,
              private maskService: MaskService,
              private router: Router,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private loadingController: LoadingController,
              private toastController: ToastController) {
    {
      this.familyMembersCreateValidator = this.formBuilder.group({
        name: ['', Validators.required]
      });}
  }

  ngOnInit() {
    this.user = this.userService.user;
    console.log(this.userService.user.familyMembers);
    this.getAllFamilyMembers();
  }

  getAllFamilyMembers() {
    this.present();
    const subscription = this.familymembersService.findFamilyMembers().subscribe(
        value => {console.log(value), this.familyMembersFromDb = value },
        error => {this.dismiss(),this.presentToast(error,2000)},
        () => {this.dismiss(),subscription.unsubscribe()}
    )
  }

  createFamilyMember(){
    this.present();
    const subscription = this.familymembersService.createFamilyMember(this.member).subscribe(
        value => this.userService.user.familyMembers.push(value),
        error => {this.dismiss(),
            this.presentToast(error,2000)},

        () => {
          this.dismiss(),
              this.member.firstName = "",
              this.isWantCreateMemberFamily = false,
              this.getAllFamilyMembers(),
              subscription.unsubscribe()});
  }

  goMask(index) {
    this.maskService.idMemberFamilyToCreateMask = index;
    console.log(index);
    console.log(this.maskService.idMemberFamilyToCreateMask);
    this.router.navigateByUrl('mask');
  }

  wantCreateMemberFamily() {
    this.isWantCreateMemberFamily = !this.isWantCreateMemberFamily;
  }

  deleteMember(idMember) {
    let reset = [];
    this.present();
    const subscription = this.familymembersService.deleteMember(idMember).subscribe(
        response => {this.userService.user.familyMembers = reset},
        error => { this.dismiss(),
            console.log(error),
            this.presentToast(error,2000)},
        () => {
          this.getAllFamilyMembers(),
              this.dismiss(),
              subscription.unsubscribe()}
    );
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async showAlertDeletedMember(idMember) {
    const confirm = await this.alertCtrl.create({
      header: 'Delete member family',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            {this.deleteMember(idMember),
                console.log("confirm user")};
          }
        }
      ]
    });
    await confirm.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
