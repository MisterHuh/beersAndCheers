import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';
import { relative } from 'path';

export const Jumbotron = () => {
  const img1 = 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  const barPic = 'https://images.pexels.com/photos/2599246/pexels-photo-2599246.jpeg?cs=srgb&dl=advertisement-bar-business-2599246.jpg&fm=jpg';
  const open = 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const classyBar = 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const classyBar2 = 'https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const brewery = 'https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  const brewery2 = 'https://www.thespruceeats.com/thmb/pzs1Kf6w9s2BIqPTWFHsl5mm0aM=/2124x1195/smart/filters:no_upscale()/119707162_HighRes-58a6c3853df78c345b35d3d4.jpg';
  const brewery3 = 'https://images.squarespace-cdn.com/content/v1/557a21bee4b0141b05c71638/1437520481089-J2QQX2X2NONPOGYJ53P4/ke17ZwdGBToddI8pDm48kCIfPwOH1JKD_SSZAdFqRCR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQ1yTf8QSfPBM39uyLb9Xe5bhgtb14vQsPIhK4dx4Uvp5Pc19j1LVISwmFTcyujgXQ/Best-Beach-high-res-beer-sampler.jpg?format=2500w';
  const beer = 'https://wallpaperstream.com/wallpapers/thumbnails/beer/Alcohol-Barrel-and-Beer-Drink-Glasses_thumb2x.jpg';
  const beer2 = 'http://www.4usky.com/data/out/10/164058309-beer-wallpapers.jpg';
  const flight = 'https://303magazine.com/wp-content/uploads/2017/06/flight-Crazy-Mountain.jpg';
  const beerClink = 'https://static.westernunion-microsites.com/blog/uploads/2017/09/shutterstock_491351821_1.jpg';

  const imgWrapper = {
    height: '50vh'
  };
  const imgSize = {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
  };

  const lineOne = {
    top: '15%',
    right: '10%',
    color: 'white',
    textShadow: '1px 1px grey'
  };
  const lineTwo = {
    top: '35%',
    right: '10%',
    textShadow: '1px 1px grey'
  };

  return (
    <div>
      <Jumbo fluid className=" p-0 mb-1">

        <Container fluid className="p-0 position-relative" style={imgWrapper}>
          <img src={beerClink} alt="jumbo" style={imgSize} className=""/>
          <h1 className="position-absolute " style={lineOne}>Welcome!</h1>
          {/* <h1 className="position-absolute " style={lineTwo}>Open 24/7</h1> */}
        </Container>
      </Jumbo>
    </div>
  );
};
