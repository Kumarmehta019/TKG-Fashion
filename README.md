### README progress... ![35%](https://progress-bar.dev/35)

# SEI Project Three: TKG Fashion

## Table of Contents:

|  **No:**     | **Content** |
| -------- | ------- |
|    1    | **`Project Overview`**|
|    2     | **`The Brief and Technical Requirements`**|
|    3    | **`Technologies Used`**|
|    4     | **`Project Timeline - 7 Days`**|
|    5     | **`Bugs`**|
|    6     | **`Wins and Challenges`**|
|    7     | **`Future Improvements`**|
|    8     | **`Key Learnings`**|

 ## 1. Project Overview
As a group of three we discussed various project options and eventually decided to build an e-commerce App. I was particularly keen on the idea as I had not created an e-commerce app before and was excited at the prospect of building my first e-commerce App. I came up with the name TKG Fashion (using each collaborator's initials) and the project then started to take shape from there. TKG Fashion focuses on user's browsing and purchasing items of clothing. *Asos*, *Boohoo*, *Next* and *Shein* influenced this project, a special thanks goes out to them.

#### Deployed version available here: 👉🏽👉🏽[*TKG FASHION*](https://tkgfashion.herokuapp.com/) 👈🏽👈🏽

### Resources:
> The following websites assisted with this project:
> 1. [React](https://reactjs.org/)
> 2. [Django](https://www.djangoproject.com/)
> 3. [Semantic UI React](https://react.semantic-ui.com/)
> 4. [PostgreSQL](https://www.postgresql.org/)
> 5. [Pure React Carousel](https://www.npmjs.com/package/pure-react-carousel)

## 2. Project Brief and Technical Requirements

- **Build a full-stack application** with a React front-end and a Django back-end
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
- **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
- **Have a visually impressive design**
- **Be deployed online**

## 3. Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS
- Semantic UI
- Animate.css
- Axios
- Git
- GitHub
- Google Fonts
- Google Jamboard- Wireframe
- Insomnia- REST Client
- TablePlus
- Yarn
- Django
- PostgreSQL
- JSONWebToken
- Asana- Planning
- Zoom
- Slack
- Heroku
- Pure React Carousel
- Cloudinary
- Pipenv
- Pyjwt
- LucidChart-Entity Relationship Diagram (ERD)
- Python


## 4. Project Timeline- 7 Days

### Planning:
After deciding on the concept for our app, we worked together to create wireframes for the App. I also created the Entity Relationship Diagram (ERD), which you will see below. As the majority of the collaborators had used Asana before, we used it again to plan our MVP. Each collaborate was given tasks to work on for the App. We decided as a group to use Git and GitHub for version control and had daily stand up to ensure communication was maintained throughout the project. Collaborators also got together at the end of the day to add, commit, push their branches. After each commit the conents of the development branch were pulled and a new brach was created off that, to limit any issues.

#### Wireframe:

<img width="300" alt="Home Page Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569146-57c2995c-16ea-4a95-80de-e3fe77e1c3c6.png"> <img width="300" alt="Home Page Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569049-52201dcb-b94e-4a0f-bb6d-03dc2b693379.png"> <img width="300" alt="Login/Register Wireframe" src="https://user-images.githubusercontent.com/59033443/147569210-06300a24-c86d-4e69-af01-3e32f020782d.png"> <img width="300" alt="Card Index Wireframe" src="https://user-images.githubusercontent.com/59033443/147569260-6239a5ac-cfe4-4231-81bb-c857be1920a9.png"> <img width="300" alt="Card Show Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569288-99372109-4242-4bf1-8781-55bef2ab80c5.png"> <img width="300" alt="Card Show Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569314-995e7418-27ce-472a-8f44-45a2dd1c92a7.png"> <img width="300" alt="Bag Wireframe" src="https://user-images.githubusercontent.com/59033443/147569316-a63ac252-3cb2-4dfe-9b68-b776e8eb1757.png">

#### Entity Relationship Diagram (ERD):

<img width="1000" alt="Home Page Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147774281-eabc2931-653d-4f6f-89aa-e1e3f423e0df.png">


### Getting Started:

#### Backend

We agreed as a group to build out the backend components of the project together so that we could all help each other code this part and to also limit the amount of time spent on the backend. One person would screen share over a zoom video call and the others would guide the person coding and also look out for any errors/mistakes. The backend took a few days to create, with each member of the team coding, guiding and looking out for errors/mistakes during the live coding session. We also used this time to discuss and implement the embedded or referenced relationships for our App. The backend is a CRUD API, using PostgreSQL, Python and Django. We agreed as a group to seed data into various tables of our database.

We created six models (products, images, orders, reviews, sellers and jwt_auth). The product and image models are shown below.

```js
class Product(models.Model):
    SIZES = (
        ('XS','extra-small'),
        ('S','small'),
        ('M','medium'),
        ('L','large'),
        ('XL','extra-large')
    )

    CATEGORIES = (
        ('T-Shirts', 'T-Shirts'),
        ('Jeans', 'Jeans'),
        ('Dresses', 'Dresses'),
        ('Jumpers', 'Jumpers'), 
        ('Shorts', 'Shorts'),
        ('Shirts', 'Shirts'),
        ('Trousers', 'Trousers'),
        ('Socks', 'Socks')
    )

    COLOURS = (
        ('Black', 'Black'),
        ('Yellow', 'Yellow'),
        ('Blue', 'Blue'),
        ('Red', 'Red'),
        ('Green', 'Green'),
        ('Orange', 'Orange'),
        ('White', 'White'),
        ('Purple', 'Purple'),
        ('Brown', 'Brown'),
        ('Grey', 'Grey'),
        ('Beige', 'Beige'),
        ('Pink', 'Pink')
    )

    GENDERS = (
        ('M', 'Male'),
        ('F', 'Female')
    )

    name = models.CharField(max_length=100, default=None)
    price = models.IntegerField()
    size = models.CharField(max_length=10, default=None, choices=SIZES)
    stock = models.IntegerField()
    category = models.CharField(max_length=50, default=None, choices=CATEGORIES)
    gender = models.CharField(max_length=50, default=None, choices=GENDERS)
    colour = models.CharField(max_length=50, default=None, choices=COLOURS)
```

```js
class Image(models.Model):
    title = models.CharField(max_length=500, default=None)
    image = models.ImageField(upload_to='images/')
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
```

Once we had created the models, we worked on the controllers. Serializers were also constructed and evaluated in Insomnia to verify we had all of the necessary data. Most schemas featured nested fields because of the relationships between tables. 'Populated' schemas were constructed to ensure that there were no circular import problems.


#### Front-end

Once the backend had been completed, we split tasks to complete different components on the front-end. For styling, we decided to use [Semantic UI](https://react.semantic-ui.com/). For this project I worked on the Footer, the Home page and part of the filter categories on the product index page. I also worked on the CSS/styling for the Navbar, Footer and the Home page for this project.


#### Routes:
The routes to the various pages/components were built using `React` as well as `BrowserRouter`, `Routes` and `Route` from `React-Router-Dom`.

```js
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/browse/:id' element={<ProductShow />} />
        <Route exact path='/browse' element={<ProductIndex />} />
        <Route path='/orders' element={<Bag />} />
      </Routes>
      <Footer />
    </BrowserRouter>
```


#### _**Footer:**_ 
I built out the footer using Semantic UI and created a . I had the idea to have the copyright date automatically change based on the year, this would mean that I wouldn't have to manually change the year every year. I also wanted to add navigation links to every member of the group's Github pages. Finally I wanted to add some interactivity to the logo and I created a gif for the logo. It was during the coding for the footer that I came across the issue of the footer not sticking to the bottom of the page. I went away and did some research on the topic and found out that this was a common problem, especially when a particular page didnt have enough content. The simple fix was to give the particular component page a minimum viewport height, this fixed the issue.

```js
<div className="row">
  <p className="col-sm has-text-white is-size-7 has-text-centered mb-1"> 
  &copy;{new Date().getFullYear()} MUSEUM MAPPER INC | All rights reserved | Terms of Service | Privacy
  </p>
</div>
```

```js
<div className="row">
   <p className="col-sm has-text-white is-size-7 has-text-centered">
     Content Creaters: <a className="link is-size-7" id="links" href="https://github.com/iglfranks" rel="noreferrer" target="_blank">Isaac</a>, <a className="link is-size-7" id="links" href="https://github.com/Kumarmehta019" rel="noreferrer" target="_blank">Kumar</a>, <a className="link is-size-7" id="links" href="https://github.com/Olys6" rel="noreferrer" target="_blank">Oliver</a> and <a className="link is-size-7" id="links" href="https://github.com/sapphire-p" rel="noreferrer" target="_blank">Sapphire</a>
   </p>
</div>
```

<img width="1000" alt="Footer" src="https://user-images.githubusercontent.com/88886169/147881360-bc7b9ac7-6f8c-4923-8452-e33f059fe32f.png">

#### _**Carousel:**_ 
In order to create the carousel component I had to research different libraries/dependencies that would help me create a carousel to display various images for each museum. The carousel component would then slot into the museum show component. I had to read through the documentation for Swiperjs and then implement the instructions for allowing the carousel to work. I also had to install the Swiperjs library to React. I wanted the carousel to slide through the museum pictures automatically so that the user could spend their time reading the description whilst the images changed.

```js

<section>
  {museumData ?
    <div className="swiper">
     <div className="swiper-wrapper">
       <Swiper spaceBetween={20} slidesPerView={1} centeredSlides={true} autoplay={{
         'delay': 5500,
         'disableOnInteraction': false
        }} pagination={{
          'clickable': true
        }} navigation={true} className="mySwiper">
          {museumData.map(image => {
            return (
             <SwiperSlide key={image}><img src={image} /></SwiperSlide>
            )
          })}
        </Swiper>
       </div>
      </div>
      :
      <h2 className="has-text-white is-size-5">{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
   }
</section>
```

<img width="450" alt="Screenshot 2022-01-02 at 16 15 44" src="https://user-images.githubusercontent.com/88886169/147881974-52b007d5-8c71-4f3a-9053-41eada1e85a9.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 39" src="https://user-images.githubusercontent.com/88886169/147881978-8faeb7eb-98ff-4a65-bea9-eac0724eb149.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 25" src="https://user-images.githubusercontent.com/88886169/147881983-9f1845fe-4d84-4e7c-85ec-59378ad129d2.png"> <img width="450" alt="Screenshot 2022-01-02 at 16 15 51" src="https://user-images.githubusercontent.com/88886169/147881984-afb2c91d-44e3-41cd-8a9a-440a3e46c92f.png">


#### _**Styling:**_

The layout was created using the Bulma framework, CSS and FontAwesome. This really helped to provide the site with continuity and structure across all the pages of the App.


## 5. Bugs

- The App is not fully mobile responsive and with more time this could be fixed.
- There was a bug with the carousel images displaying half an image size, but I managed to fix this.
- The map doesn't seem to show up, since deploying the project on Heroku.

## 6. Wins and Challenges

### Wins:

- Group Coding - this was my first time working in a big group coding on a full-stack project. Our group worked really well together and really played to each other's strengths and weaknesses. Having an extra pair of eyes on a project really helps to overcome problems and think of different solutions to problems. It also improves your learning on topics/areas you require further development on.

- Functionality- Given the short time we were given, I am amazed at how far we came and what we were able to build. If given more time I wonder how much more we could have built out this App and made it more mobile responsive.

- Full-Stack Project- As this was my first full-stack project it was great to see how the front-end connected with the backend. It was also amazing how much we had accomplished as a group but also individually to build out this App.

### Challenges:

- One of the biggest challenges we faced during this project was completing the project to a standard we were all happy with. We were unable to implement a mobile responsive App but are extremely happy with the end result. 
- How to use Swiperjs and implement this in the project.
- How to use local storage to store data and use this data to display the username on the navbar.

## 7. Future Improvements

- Fix the bugs.
- Make the App mobile responsive.
- Add more CSS and styling to the App.


## 8. Key Learnings

- Learning to read documentation for a new library and implementing it on the project.
- Learning to use Bulma CSS Framework.
- Utilising Insomnia to test API endpoints and get requests.
- Creating a wireframe on Figma.
- Learning to work as a group and working around each other's schedule.





