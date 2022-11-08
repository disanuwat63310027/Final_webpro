import React from 'react'

export default function Home() {
  return (
    <div>
      <div>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  {/* Navbar (sit on top) */}
  <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" className="w3-bar-item w3-button"><b>Lucian</b> Company</a>
      {/* Float links to the right. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
        <a href="#projects" className="w3-bar-item w3-button">Projects</a>
        <a href="#about" className="w3-bar-item w3-button">About</a>
        <a href="#contact" className="w3-bar-item w3-button">Contact</a>
        <a href="./Login" className="w3-bar-item w3-button">Login</a>
        <a href="./Course" className="w3-bar-item w3-button">Course</a>
      </div>
    </div>
  </div>
  {/* Header */}
  <header className="w3-display-container w3-content w3-wide" style={{maxWidth: 1500}} id="home">
    <img className="w3-image" src="https://www.pumpkin.care/wp-content/uploads/2022/01/how-to-train-your-cat.jpg" alt="Architecture" width={1500} height={800} />
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>LC</b></span> <span className="w3-hide-small w3-text-light-grey">Company</span></h1>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{maxWidth: 1564}}>
    {/* Project Section */}
    <div className="w3-container w3-padding-32" id="projects">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
          <img src="https://cdn.shopify.com/s/files/1/0070/4990/4194/articles/harness_2-2_1600x.jpg?v=1653959179" alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">treats</div>
          <img src="https://www.rd.com/wp-content/uploads/2016/02/02-train-cat-treats.jpg?fit=700,466" alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Gentle</div>
          <img src="https://allaboutcats.com/wp-content/uploads/2021/10/cat-learning-to-sit.jpg" alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Find it</div>
          <img src="https://live-production.wcms.abc-cdn.net.au/64c4d621a6e898faa033a97323aa1682?impolicy=wcms_crop_resize&cropH=2000&cropW=2997&xPos=1&yPos=0&width=862&height=575" alt="House" style={{width: '100%'}} />
        </div>
      </div>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Sit</div>
          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F09%2Fcat-giving-high-five-1215118956-2000.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Stay</div>
          <img src="https://www.bluevalleyanimalhospital.net/blog/wp-content/uploads/2021/09/iStock-956161022-2000x1334.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Target</div>
          <img src="https://www.rd.com/wp-content/uploads/2021/02/GettyImages-705004595.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Come</div>
          <img src="https://www.petful.com/wp-content/uploads/2014/05/manx-cat-1-750x502.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
    </div>
    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
      <p>As an equal opportunity pet fanatic, dare I say cats are just as fun to train as dogs? Your cat will welcome learning basic directions, and most kittens take well to leash training too if you pair the lessons with food and fun. "Many cats love training if done properly, with patience and rewards," says behaviorist Katenna Jones, ACAAB and director of Jones Animal Behavior in Rhode Island. Like with any other relationship, you get out what you put in!
      </p>
    </div>
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/250546279_1938675432973471_3777638151052478535_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pz_lc9qNob8AX_Q9pSR&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfAycA5Uh14gRFPX2ruVvur3v1vblTXWJMpXG66aq5q9kw&oe=6367D421" alt="John" style={{width: '100%'}} />
        <h3>Disanuwat Aof</h3>
        <p className="w3-opacity">CEO &amp; Founder</p>
        <p>Lucian Daddy</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="https://images.prismic.io/ddhomepage/9643a4bb-cc11-468e-8441-36e67308a6aa_people-main-image.jpg?auto=compress,format&rect=0,0,570,684&w=570&h=684&fit=clip&cs=srgb" alt="Jane" style={{width: '100%'}} />
        <h3>Jane Doe</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="https://imgix.ranker.com/user_node_img/111/2217894/original/2217894-photo-u178?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375" alt="Mike" style={{width: '100%'}} />
        <h3>Mike Ross</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="https://m.economictimes.com/thumb/msid-94620188,width-720,height-900,resizemode-4,imgsize-29948/straight-people-just-didnt-show-up-bros-star-billy-eichner-responds-to-disappointing-box-office-opening.jpg" alt="Dan" style={{width: '100%'}} />
        <h3>Dan Star</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
    </div>
    {/* Contact Section */}
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form action="/action_page.php" target="_blank">
        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
        <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
        <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
        <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </button>
      </form>
    </div>
    {/* Image of location/map */}
    <div className="w3-container">
      <img src="https://cdn.shopify.com/s/files/1/0070/4990/4194/files/cat_school_1600x.jpg?v=1642491495" className="w3-image" style={{width: '100%'}} />
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-16">
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">LC Company</a></p>
  </footer>
</div>

</div>

  )
}
