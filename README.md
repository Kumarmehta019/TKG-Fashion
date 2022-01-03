### README progress... ![55%](https://progress-bar.dev/55)

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
- Canva
- Imgur


## 4. Project Timeline- 7 Days

### Planning:
After deciding on the concept for our app, we worked together to create wireframes for the App. I also created the Entity Relationship Diagram (ERD), which you will see below. As the majority of the collaborators had used Asana before, we used it again to plan our MVP. Each collaborate was given tasks to work on for the App. We decided as a group to use Git and GitHub for version control and had daily stand up to ensure communication was maintained throughout the project. Collaborators also got together at the end of the day to add, commit, push their branches. After each commit the conents of the development branch were pulled and a new brach was created off that, to limit any issues.

#### Wireframe:

<img width="300" alt="Home Page Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569146-57c2995c-16ea-4a95-80de-e3fe77e1c3c6.png"> <img width="300" alt="Home Page Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569049-52201dcb-b94e-4a0f-bb6d-03dc2b693379.png"> <img width="300" alt="Login/Register Wireframe" src="https://user-images.githubusercontent.com/59033443/147569210-06300a24-c86d-4e69-af01-3e32f020782d.png"> <img width="300" alt="Card Index Wireframe" src="https://user-images.githubusercontent.com/59033443/147569260-6239a5ac-cfe4-4231-81bb-c857be1920a9.png"> <img width="300" alt="Card Show Wireframe 1 of 2" src="https://user-images.githubusercontent.com/59033443/147569288-99372109-4242-4bf1-8781-55bef2ab80c5.png"> <img width="300" alt="Card Show Wireframe 2 of 2" src="https://user-images.githubusercontent.com/59033443/147569314-995e7418-27ce-472a-8f44-45a2dd1c92a7.png"> <img width="300" alt="Bag Wireframe" src="https://user-images.githubusercontent.com/59033443/147569316-a63ac252-3cb2-4dfe-9b68-b776e8eb1757.png">

#### Entity Relationship Diagram (ERD):

<img width="1000" alt="Screenshot 2022-01-03 at 16 20 03" src="https://user-images.githubusercontent.com/88886169/147954170-daf5dcd2-51df-498b-ba32-1eedf656bcb5.png">


### Getting Started:

#### Backend

We agreed as a group to build out the backend components of the project together so that we could all help each other code this part and to also limit the amount of time spent on the backend. One person would screen share over a zoom video call and the others would guide the person coding and also look out for any errors/mistakes. The backend took a few days to create, with each member of the team coding, guiding and looking out for errors/mistakes during the live coding session. We also used this time to discuss and implement the embedded or referenced relationships for our App. The backend is a CRUD API, using PostgreSQL, Python and Django. We agreed as a group to seed data into various tables of our database.

We created six models (products, images, reviews, orders, sellers and jwt_auth). The product, image and review models are shown below:

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

```js
class Review(models.Model):
    comment = models.TextField()
    rating = models.IntegerField()
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE, related_name='reviews')
    owner = models.ForeignKey('jwt_auth.User', on_delete=models.CASCADE, related_name='reviews')
    posted_on = models.DateField(default=date.today)

```

The backend CRUD API endpoints were tested on Insomnia to ensure that the information we wanted populated correctly. After testing and changing the populated serializer for certain models that didn't show the correct information, we were able to get all the information we needed from the backend.

<img width="900" alt="Insomnia Screenshot" src="https://user-images.githubusercontent.com/88886169/147953362-6fe8da52-b5fa-4ea9-a75f-ccfd0f0c2319.png">


#### Front-end

Once we finished building out the backend, we used Asana to split out tasks to build out the front-end components. Each member of the group was given an equal amount of work to complete, so that there wasnt too much pressure or work on an individual member. At this point in time, we decided to use *Semantic UI*. I was excited to use a different CSS framework as I had always used Bulma before and really wanted to push myself for this project to see if I could learn a new framework. The front-end components I worked on were the Navbar, Footer, Favicon, the Home page and part of the filter categories on the product index page. Our group decided to come together after the components were built and decide on a colour scheme and then workon the CSS and styling for their respective components. Error handling was also added to these components at this point.


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

#### _**Navbar:**_ 
I started working on the project by creating the navbar, I made a navbar from the Museum Mapper Project and was pretty confident I could replicate this again. On this ocassion it took me some time to get used to the way Semantic UI worked and I had to read the documentation. I partially created the navbar with the name/logo and Browse links and the `userIsAuthenticated` function. I then handed over the other elements such as the login, register and bag links and sections to a group member to complete.

<img width="900" alt="Navbar" src="https://user-images.githubusercontent.com/88886169/147952904-d81a3f92-89bc-4c9a-b33b-77f50de1fc90.png">


#### _**Footer:**_ 
I built out the footer using Semantic UI and created a gif using Canva and Imgur. I had the idea to have the copyright date automatically change based on the year, this would mean that I wouldn't have to manually change the year every year. I also wanted to add navigation links to every member of the group's Github pages. 

<img width="900" alt="Footer" src="https://user-images.githubusercontent.com/88886169/147952289-8dc51921-144b-444e-be39-6bac56c8542a.png">


#### _**Home page- Carousel:**_ 
In order to create the carousel component I had to research different libraries/dependencies that would help me create a carousel to display various images for each item of clothing. As I had used Swiperjs for my previous project, I wanted to use another carousel package. I decided to use *Pure React Carousel* as it was a package that didn't impose structure or styles that needed to be defeated to meet the App's design standards. The carousel component would then slot into the home page as a sample of the images for the clothing collections we had. I had to read through the documentation for Pure React Carousel and then implement the instructions. I wanted the carousel to slide through the clothing images automatically so that the user could see the collection we have. In order to display a single image from one product, I had to map through the products array to obtain images from the products and then map through the images array to display these in the carousel slide.

```js
  const product = products.map(product => {
    return product
  })

  const images = product.map(image => {
    return image.image_set[0].image
  })
```

```js
    <Segment style={{ backgroundColor: '#F6DFEB' }}>
      <h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'black', fontFamily: 'Cinzel, serif' }}>OUR COLLECTION</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        interval={5000}
        isPlaying={true}
        playDirection='forward'
        orientation='horizontal'
        visibleSlides={3}
        infinite={true}
      >
        <Slider>
          {images.map((image, index) => {
            return (
              <Slide key={index} index={index}>
                <Image src={image}></Image>
              </Slide>
            )
          })}
        </Slider>
      </CarouselProvider>
    </Segment>

```

<img width="350" alt="Carousel image 1" src="https://user-images.githubusercontent.com/88886169/147955962-09f2c43d-9804-4976-bff8-5f96b804182f.png"> <img width="350" alt="Carousel image 2" src="https://user-images.githubusercontent.com/88886169/147956026-63435f53-b956-4ecc-80f4-16f8459f01a7.png">


#### _**Home page- Category Buttons:**_ 
I took inspiration from *Shein* where they had buttons for each category they had, and once you clicked on the button it took you to another page which was filtered based on the value of the button clicked (as seen on the url). I wanted to create something similar for this project and I went about doing this by adding an onclick function to the buttons to navigate to a url param which equaled the value of the button. 

```js
const navigate = useNavigate()

  const handleTS = (event) => {
    console.log('EVENT', event.currentTarget.value)

    if (event.currentTarget.value === 'T-Shirts') {
      navigate('/browse?value=T-Shirts')
    } else if (event.currentTarget.value === 'Jumpers') {
      navigate('/browse?value=Jumpers')
    } else if (event.currentTarget.value === 'Dresses') {
      navigate('/browse?value=Dresses')
    } else if (event.currentTarget.value === 'Shorts') {
      navigate('/browse?value=Shorts')
    } else if (event.currentTarget.value === 'Jeans') {
      navigate('/browse?value=Jeans')
    } else if (event.currentTarget.value === 'Shirts') {
      navigate('/browse?value=Shirts')
    } else if (event.currentTarget.value === 'Socks') {
      navigate('/browse?value=Socks')
    } else if (event.currentTarget.value === 'Trousers') {
      navigate('/browse?value=Trousers')
    }

  }

```
<img width="900" alt="T-Shirt Category Button" src="https://user-images.githubusercontent.com/88886169/147957024-7bb241ba-8bc9-4500-ad12-5e6e03e48ed4.png">

<img width="900" alt="T-Shirt Index Page" src="https://user-images.githubusercontent.com/88886169/147957014-386701c6-9dc6-4176-b054-bb95b2dea94e.png">

In order for the filtered category to work the product index component needed to be amended to add UrlSearchParams and a value. A useEffect would then implement the categoryValue as the value found from the URL and display the contents on the page.

#### _**Home page- Random Products:**_ 
I wanted to create three random products that would display on the website when a user goes to the website. In order to do that I created a random cards component where three random product useState were created. A useEffect hook was used and within this hook a random product was selected using `Math.floor` and `Math.random()` the random numper was then spliced from the products array (called data). The function was used again on the other two random products. This helped to avoid any duplication of random cards in the array.

```js
const [randomProductOne, setRandomProductOne] = useState(null)
  const [randomProductTwo, setRandomProductTwo] = useState(null)
  const [randomProductThree, setRandomProductThree] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('api/products/')
        let randomIndex =  Math.floor(Math.random() * data.length)
        let randomCardOne = data.splice(randomIndex, 1 )
        randomCardOne = randomCardOne[0]
        randomIndex = Math.floor(Math.random() * data.length)
        let randomCardTwo = data.splice(randomIndex, 1)
        randomCardTwo = randomCardTwo[0]
        randomIndex = Math.floor(Math.random() * data.length)
        let randomCardThree = data.splice(randomIndex, 1)
        randomCardThree = randomCardThree[0]

        setRandomProductOne(randomCardOne)
        setRandomProductTwo(randomCardTwo)
        setRandomProductThree(randomCardThree)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

```
#### _**Home page- Brands carousel:**_ 
I wanted to create carousel which cycled through the brands TKG Fashion work with and in order to implement this, I needed to use *Canva* to design their individual logos and then add them to a carousel. The carousel part was similar to the collections carousel discussed above. I started to use Canva to play around with the design for TKG Fashion's Logo so I was familiar with their design elements and created the different logos below. 










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




<img width="100" alt="TKG Luxe Logo" src="https://user-images.githubusercontent.com/88886169/147959822-0dc44b31-e3ab-4c58-aa54-2fc198d4bf8c.png">
<img width="100" alt="TKG Premium Logo" src="https://user-images.githubusercontent.com/88886169/147960354-dcdc9367-8a63-4e51-bcc5-ebe2144cfaed.png">
<img width="100" alt="TKG Design Logo" src="https://user-images.githubusercontent.com/88886169/147960371-a6c81e0a-f15e-4cb1-939a-3cd2c292ee2c.png">
<img width="100" alt="TKG Edition Logo" src="https://user-images.githubusercontent.com/88886169/147960375-17717d3f-eb25-4341-85d1-6ce2dc3f2007.png">
<img width="100" alt="TKG Finest Logo" src="https://user-images.githubusercontent.com/88886169/147960376-3afda099-fffd-4f84-993f-489227c28d44.png">
<img width="100" alt="Addidos Logo" src="https://user-images.githubusercontent.com/88886169/147960377-f2de50e7-3df8-460b-8f1c-1b137109cd41.png">
<img width="100" alt="Nic Logo" src="https://user-images.githubusercontent.com/88886169/147960544-333acc1c-6c29-4dfd-b338-3f628299a274.png">
<img width="100" alt="Exotic Range Logo" src="https://user-images.githubusercontent.com/88886169/147960547-48ed5d19-36dc-45cb-ae65-1fa1f9001cd3.png">
<img width="100" alt="Penguin Clothes Logo" src="">
<img width="100" alt="Zana Logo" src="">
<img width="100" alt="Ocean Island Logo" src="">
<img width="100" alt="Perry Fred Logo" src="">
<img width="100" alt="The South Face Logo" src="">
<img width="100" alt="British Connection" src="">
<img width="100" alt="Family Group" src="">




