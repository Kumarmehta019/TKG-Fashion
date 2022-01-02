### README progress... ![25%](https://progress-bar.dev/25)

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
TKG Fashion is a full-stack e-commerce app that allows customers to browse and buy clothes. Online retail websites such as [*Asos*](https://www.asos.com/women/), [*Boohoo*](https://www.boohoo.com/), and [*Shein*](https://www.shein.co.uk/) influenced this project.

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
- LucidChart-Entity Relationship Diagram(ERD)
- Python


## 4. Project Timeline- 7 Days

### Planning:
We agreed as a group to develop a clothes e-commerce website as it would be a great experience, and so TKG Fashion was created. After deciding on the concept for our app, we worked together to create wireframes and entity-relationship diagrams. Asana was used to plan our MVP and develop user stories for both the front and back ends. Tasks were then given to ensure that work was distributed equitably and that all requirements were met. Git and GitHub were utilised for version control, and continual communication was maintained during pushes and pulls to reduce and resolve any merge conflicts.

<img width="400" alt="Home Page Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569146-57c2995c-16ea-4a95-80de-e3fe77e1c3c6.png"> <img width="400" alt="Home Page Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569049-52201dcb-b94e-4a0f-bb6d-03dc2b693379.png"> <img width="400" alt="Login/Register Wireframe" src="https://user-images.githubusercontent.com/59033443/147569210-06300a24-c86d-4e69-af01-3e32f020782d.png"> <img width="400" alt="Card Index Wireframe" src="https://user-images.githubusercontent.com/59033443/147569260-6239a5ac-cfe4-4231-81bb-c857be1920a9.png"> <img width="400" alt="Card Show Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569288-99372109-4242-4bf1-8781-55bef2ab80c5.png"> <img width="400" alt="Card Show Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569314-995e7418-27ce-472a-8f44-45a2dd1c92a7.png"> <img width="400" alt="Bag Wireframe" src="https://user-images.githubusercontent.com/59033443/147569316-a63ac252-3cb2-4dfe-9b68-b776e8eb1757.png">

### Entity Relationship Diagram (ERD):

<img width="1000" alt="Home Page Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147774281-eabc2931-653d-4f6f-89aa-e1e3f423e0df.png">


### Getting Started:

### Backend

We chose as a group to build out the project's backend elements so that we could all gain expertise, as well as to limit the amount of time spent on the backend owing to the navigators seeing any potential errors. The backend is a CRUD API, using PostgreSQL, Python and Django. We agreed as a group to seed data into various tables of our database.

We were confident in the relationships between each of our models as a result of our extensive preparation. There were a total of six models (products, images, orders, reviews, sellers and jwt_auth). The product and image models are shown below, and it was critical to verify that the `ForeignKey` and model relationships were correct.

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


### Front-end

For the front-end, we would meet in our daily stand ups (morning and evening) and discuss what components everyone wanted to focus on for the day and what they accomplished that day. For this project, I worked on the Navbar, Footer, Favicon, Carousel and part of the Profile. I also worked on the CSS for the App.


### Routes:
The routes to the various pages/components were built using `React` as well as `BrowserRouter`, `Switch` and `Route` from `React-Router-Dom`.

```javascript
    <BrowserRouter>
      <NavBar />
      <div className="site-wrapper">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/museums' component={MuseumsIndex} />
          <Route exact path='/museums/:id' component={MuseumShow} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/filteredmuseums' component={FilteredMuseums} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/exhibits' component={StandoutExhibit} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
```


### _**Navbar:**_ 
I used Bulma and FontAwesome to assist me in building out the Navbar component and then began adding navigation links to the Home (by clicking on the logo), All Museums, Museum Map, Exhibits, Profile, Login, Register and Logout. 

If a user was not logged in, I wanted the navbar to display the options 'Register' or 'Login,' and if the user was logged in, I wanted the navbar to show the options 'Logout,' and the 'Profile name' To do this, I utilised a ternary that determines whether or not the user is authenticated. The userIsAuthenticated function first determines whether or not a payload exists; if it does not, false is returned. The function then checks if the current time of the token is less than the expiry time, and if it returns true, the user can be authenticated. I also used the token to display the username and then use that to display on the profile name.


```js

const userIsAuthenticated = () => {
   const payload = getPayload()
   if (!payload) return false
   const now = Math.round(Date.now() / 1000)
   return now < payload.exp
}
```



```js
<div className="navbar-end">
 {!userIsAuthenticated() ?
     <>
        <div className="navbar-item"><Link to="/register" className="link is-size-6 has-text-weight-light"><i className="fas fa-clipboard-check has-text-success-dark"></i> Register</Link></div>
        <div className="navbar-item"><Link to="/login" className="link is-size-6 has-text-weight-light"><i className="fas fa-sign-in-alt has-text-danger-dark"></i> Login</Link></div>
     </>
     :
     <>
        <div className="navbar-item"><Link to="/profile" className="link is-size-6 has-text-weight-light"><i className="fas fa-user has-text-info"></i> {username}</Link></div>
        <div className="navbar-item"><a className="link is-size-6 has-text-weight-light" onClick={handleLogout}><i className="fas fa-sign-out-alt has-text-danger-dark"></i> Logout</a></div>
     </>
 }
</div>
```

<img width="1000" alt="Not Logged In" src="https://user-images.githubusercontent.com/88886169/147880318-2aecba4c-d1d5-49f7-804f-5ff05df17113.png">
<img width="1000" alt="Logged In" src="https://user-images.githubusercontent.com/88886169/147880320-209fcac3-afc0-4bdd-a4df-b368afbce872.png">



### _**Footer:**_ 
I built out the footer with the help from Bulma and FontAwesome. I had the idea to have the copyright date automatically change based on the year, this would mean that I wouldn't have to manually change the year every year. I also wanted to add navigation links to every member of the group's Github pages. Finally I wanted to add some interactivity to the logo and I created a gif for the logo. It was during the coding for the footer that I came across the issue of the footer not sticking to the bottom of the page. I went away and did some research on the topic and found out that this was a common problem, especially when a particular page didnt have enough content. The simple fix was to give the particular component page a minimum viewport height, this fixed the issue.

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

### _**Carousel:**_ 
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


### _**Styling:**_

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





