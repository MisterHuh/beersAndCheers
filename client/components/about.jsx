import React from 'react';

export const About = () => {

  const containerSize = {
    width: '100wh'
  };

  return (
    <div className="d-flex flex-column px-5" style={containerSize}>
      <h1 className="border-bottom my-3 text-center pb-2">About Beers & Cheers</h1>

      <p>Beers & Cheers is a full stack shopping cart app to view products, add to cart, and purchase craft beers from local breweries</p>
      <p>Talk about how the front end was built</p>
      <p>Talk about how the back end was built</p>
      <p>small chart here or on the right side that shows the breakdown of hours?</p>
      <p>Feel free to stop by my portfolio site (hyperlink here) or find this project on my github (hyperlink).</p>

      <h1 className="border-bottom my-3 text-center pb-2">About Me</h1>

      <p>After graduating from California State University of Fullerton with a degree in Business Administration, I was very eager to find my first professional job. I enjoyed learning about the internal aspects of a business, but I was having continuous doubts about my career path and what my true passions were. </p>

      <p>Along the lines, I found myself enjoying problem-solving of all sorts and types. One key moment was a time when my co-worker and I wrote a simple macro command on Excel, which resulted in automating our weekly task. Although it took us quite some time, the process of exploring the unknown and solving the problem through trial and error was very captivating.  At the time, I was extremely fascinated by the fact that these set of words created commands and actions in Excel, rather than just being sentences. That was my first accidental glimpse into the world of programming. </p>

      <p>After quite some time, I realized that my passions didn’t align with the career path I was currently set on.  Eventually, I took a leap of faith to teach myself the basics of coding and soon after, enrolled in an accelerated program.  Upon graduating, it’s been nothing, but a small step in the right direction and I can’t wait to see where my new journey takes me.  </p>

      <p>In my leisure time,  I enjoy watching movies and TV shows, trying new cooking recipes, and spending quality time with my fiance and our 3 dogs. </p>

    </div>
  );
};
