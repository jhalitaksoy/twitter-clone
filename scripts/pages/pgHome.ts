import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import FlTweet from 'components/FlTweet';
import ListViewItem from '@smartface/native/ui/listviewitem';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
   likedIndex  =  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
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
        flTweet.replyCount = tweet.repylCount;
        flTweet.retweetCount = tweet.retweetCount;
        flTweet.likeCount = tweet.likeCount;
        flTweet.liked = this.likedIndex[index];
        flTweet.onLikePress = () => {
            this.likedIndex[index] = !this.likedIndex[index];
            this.listView1.refreshData();
        }
    }
  }
}

const data = [
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
        repylCount: "13",
        retweetCount: "26",
        likeCount: "120",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
        repylCount: "23",
        retweetCount: "44",
        likeCount: "232",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
        repylCount: "1",
        retweetCount: "5",
        likeCount: "25",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
        repylCount: "16",
        retweetCount: "54",
        likeCount: "253",
    },
    ///
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
        repylCount: "13",
        retweetCount: "26",
        likeCount: "120",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
        repylCount: "23",
        retweetCount: "44",
        likeCount: "232",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
        repylCount: "1",
        retweetCount: "5",
        likeCount: "25",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
        repylCount: "16",
        retweetCount: "54",
        likeCount: "253",
    },
    ///
    {
        topTitle: "Kieron Dotson and Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Martha Craig",
        subTitle: "@craig_love ·12h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile1.png",
        repylCount: "13",
        retweetCount: "26",
        likeCount: "120",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "Maximmilian",
        subTitle: "@maxjacobson ·3h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile2.png",
        repylCount: "23",
        retweetCount: "44",
        likeCount: "232",
    },
    {
        topTitle: "Kieron Dotson Retweeted",
        topIcon: "images://retweet.png",
        title: "Tabitha Potter",
        subTitle: "@mis_potter ·14h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile3.png",
        repylCount: "1",
        retweetCount: "5",
        likeCount: "25",
    },
    {
        topTitle: "Zack John liked",
        topIcon: "images://like_filled.png",
        title: "karennne",
        subTitle: "@karennne ·10h",
        text: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
        icon: "images://profile4.png",
        repylCount: "16",
        retweetCount: "54",
        likeCount: "253",
    },
]