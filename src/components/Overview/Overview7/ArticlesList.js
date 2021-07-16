import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import images from '../../../utils/images';

const articlesData = [
  {
    title: 'Nail the bet',
    image: 'https://miro.medium.com/max/700/0*Rgwt6RCDIb5K_kun',
    brief: 'We’ve found that many people who have found it difficult to win a single bet, is it luck? or is it lack of effort?',
    fullArticle: '/article/nail-the-bet',
    article_url: 'https://www.google.com/?gws_rd=ssl'
  },
  {
    title: 'How to win multiple bets',
    image: 'https://www.internships.com/wp-content/uploads/2019/05/resume.jpg',
    brief: 'As an gambler you would want to win multiple bets and get a fortune in a single day. Is that even possible? What are the options..',
    fullArticle: '/article/craft-a-winning-resume',
    article_url: 'https://www.google.com/?gws_rd=ssl'
  },
  {
    title: 'Types of bettings available',
    image: 'https://www.internships.com/wp-content/uploads/2020/02/cover_letter-min-scaled.jpg',
    brief: 'You may be wondering where and on what I can bet on, let\'s explore the best possible options out there..',
    fullArticle: '/article/write-a-standout-cover-letter',
    article_url: 'https://www.google.com/?gws_rd=ssl'
  },
  {
    title: 'How to be confident while deciding on a bet',
    image: 'https://www.internships.com/wp-content/uploads/2020/02/career_advice-min-scaled.jpg',
    brief: 'Do you know that confidence and decision maing go together in gambling?? Well, it is very true and it impacts your future decisions as well. Let\'s see how and why..',
    fullArticle: '/article/how-the-body-language-matters-in-an-interview',
    article_url: 'https://www.google.com/?gws_rd=ssl'
  }
];

const ArticlesList = () => {
  const [loading] = useState(false);
  const [articles] = useState(articlesData);

  return loading
    ? <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: 300}}>
        {/* <LoadingScreen /> */}
      </div>
    : <Grid container spacing={2} className="z-over pb-lg-5">
        {
          articles && articles.length > 0 && articles.map((a, id) => (
            <Grid item lg={6} key={id} className="mb-4">
              <Grid container spacing={0}>
                <Grid item lg={4}>
                  <div className="blog-article-image whiteRoundedBox" style={{ backgroundImage: "url(" + a.image + ")",width: 150 }}>
                    <img src={images.transparent_square.default} alt={a.title} className="img-fluid" style={{width: '100%'}} />
                  </div>
                </Grid>
                <Grid item lg={8}>
                  <div className="blog-article-title">{a.title}</div>
                  {/* <div className="blog-article-date">{moment(new Date(a.date)).format('DD MMMM, Y')}</div> */}
                  <div className="blog-article-brief">{a.brief}</div>
                  <a href={a.article_url} target="_blank" rel="noopener noreferrer" className="blueText">Read more <i className="fa-right fa Example of chevron-circle-right fa-chevron-circle-right ml-2" aria-hidden="true"></i></a>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
}

export default ArticlesList;
