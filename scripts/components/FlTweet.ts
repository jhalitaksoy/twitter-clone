import Image from '@smartface/native/ui/image';
import FlTweetDesign from 'generated/my-components/FlTweet';

export default class FlTweet extends FlTweetDesign {
  pageName?: string | undefined;

  _topTitle: string;
  _topIcon: string;
  _title: string;
  _subTitle: string;
  _text: string;
  _icon: string;
  _liked: boolean;

  private _replyCount: string;
  private _retweetCount: string;
  private _likeCount: string;

  public onLikePress = () => {}

  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
    this.likeIcon.onTouchEnded = () => {
      this.onLikePress();
    }
  }
  
  public get topTitle() : string {
    return this._topTitle;
  }
  public set topTitle(value : string) {
    this._topTitle = value;
    this.label3.text = value;
  }
  
  public get topIcon() : string {
    return this._topIcon;
  }
  public set topIcon(value : string) {
    this._topIcon = value;
    this.imageView3.image = value;
  }

  public get title() : string {
    return this._title;
  }
  public set title(value : string) {
    this._title = value;
    this.label1.text = value;
  }

  public get subTitle() : string {
    return this._subTitle;
  }
  public set subTitle(value : string) {
    this._subTitle = value;
    this.label2.text = value;
  }

  public get text() : string {
    return this._text;
  }
  public set text(value : string) {
    this._text = value;
    this.textView1.text = value;
  }

  public get icon() : string {
    return this._icon;
  }
  public set icon(value : string) {
    this._icon = value;
    this.imgProfile.image = value;
  }

  public get replyCount(): string {
      return this._replyCount;
  }
  public set replyCount(value: string) {
      this._replyCount = value;
      this.lblReply.text= value;
  }
  public get retweetCount(): string {
    return this._retweetCount;
  }
  public set retweetCount(value: string) {
    this._retweetCount = value;
    this.lblRetweet.text= value;
  }
  public get likeCount(): string {
    return this._likeCount;
  }
  public set likeCount(value: string) {
    this._likeCount = value;
    this.lblLikes.text= value;
  }

  public get liked(): boolean {
    return this._liked;
  }
  public set liked(value: boolean) {
    this._liked = value;
    this.likeIcon.image = value ? "images://like_filled.png" : "images://like.png";
  }

  // TODO: repy, retweet and like count 
}
