import EmailImg from "../images/email.png";
import OrganizationImg from "../images/organization.png";
import LocationImg from "../images/location.png";
import CalenderImg from "../images/date.png";
import TwitterImg from "../images/twitter.png";
import WebsiteImg from "../images/website.png";

export const info = (email:any,location:any,company:any,createdDate:any,twitterUsername:any,gitRepo:any)=>
{
  return(
    [
      {
        id: 1,
        icon: EmailImg,
        name: "Email",
        info: email??'N/A',
      },
      {
        id: 2,
        icon: OrganizationImg,
        name: "Organization",
        info: company??'N/A',
      },
      {
        id: 3,
        icon: LocationImg,
        name: "Location",
        info: location,
      },
      {
        id: 4,
        icon: CalenderImg,
        name: "Joined Date",
        info: createdDate,
      },
      {
        id: 5,
        icon: TwitterImg,
        name: "Twitter",
        info: twitterUsername??'N/A',
      },
      {
        id: 6,
        icon: WebsiteImg,
        name: "Website",
        // info: gitRepo,
        info: "github.com",
      },
    ]



  )
}

