## ![Site Logo](public/images/abir_logo.png)

### Abir Santra | Portfolio Website using Sanity and HashnodeAPI

A clean, simple, elegant and responsive portfolio website for developers. [Click to Preview](https://www.abirsantra.com)

This is a dynamic portfolio which is powered by Sanity CMS. All data related to Experience, Education, Projects are fetched from the Sanity CDN. All blogs are fetched from Hashnode API.

## Features
* Navbar with Logo(Editable), Theme Switcher, and Menu Toggle
* Hero Section with Name, Tagline, Social Links
* About Section with Image, Description and CV download button
* Experience Section with Company Logo, Name, Job Role, Location, Duration, Focus, and drop-down Description
* Education Section with Institute Logo, Name, Degree, Location, Duration, and Score
* Tech Stack with proficient skills and technologies.
* Projects section with 3 featured projects
* Blogs section with 4 latest blogs.
* All Projects page with all the projects
* Individual Project pages with Title, Tagline, Showcase Image, Description, Demo link, Github link, and Tools used.
* Recent Blogs page with all the recent blogs.
* Footer with Logo, Social links, and link to Email.

### Experience, Education and Project data can be created, updated, or deleted using the admin page without having to change any code.

### 🌟 If you want to use this as a template for your own portfolio site, follow the steps below:

#### Sanity Setup

1. Go to [Sanity](https://www.sanity.io/) and create an account using the free plan.
2. Create a dataset on Sanity
3. Go to the `API` settings on the Sanity Dashboard and under `CORS origins` add the url of your localhost such as `https://localhost:3000`

#### Repo Setup

1. Fork this repo
2. Clone it to your local machine
3. Run `npm install` to install all the necessary packages
4. Open the file `sanity.config.ts` in the route folder
   1. Change `name` and `title` to your dataset name
   2. Change the `projectId` to your projectId
5. Run `npm run dev` to start the application
6. Open `http://localhost:3000` to see the application running
7. Navigate to `http://localhost:3000/admin` to open the Sanity Studio and login to your account
8. Add your Experience, Education, and Projects
9. Change all the static data in the code like Name, Images, Logo, CV, etc

Remember to add your deployed origin to the Sanity.

### If you liked this repo, give it a start ⭐