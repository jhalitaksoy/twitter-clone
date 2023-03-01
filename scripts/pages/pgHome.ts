import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import FlTweet from 'components/FlTweet';
import ListViewItem from '@smartface/native/ui/listviewitem';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.initListView();
  }

  initListView() {
    this.listView1.onRowBind = (item: ListViewItem, index: number) => {
        //@ts-ignore
        const flTweet = item.children.flTweet as FlTweet;
        const tweet = data[index];
        flTweet.topIcon = tweet.topIcon;
        flTweet.topTitle = tweet.topTitle;
        flTweet.title = tweet.title;
        flTweet.subTitle = tweet.subTitle;
        flTweet.text = tweet.text;
        flTweet.icon = tweet.icon;
    }
  }
}

const data = [
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
    },
    ///
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
    },
    ///
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
    },
]