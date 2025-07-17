// You’re going to create a vibrant, interactive website for The Green Byte Bistro. 
// This website will feature:

// Homepage: Displays key details of the bistro - name, address,
// and contact info.
// Nav Bar: Includes links to various sections of the site.
// Menu Page: Showcases the menu, sorted into mains, desserts, and sides.
// Category Page: Generates pages for each menu type, 
// using route parameters for content rendering.

const express = require('express');
const app = express();

const restaurant = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
        {
            id: 1,
            name: 'Quantum Quinoa Mushroom Burger',
            price: 13.00,
            rating: 4,
            category: 'mains',
            details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
        },
        {
            id: 2,
            name: 'Binary Berry Cheesecake',
            price: 10.11,
            rating: 3,
            category: 'desserts',
            details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
        },
        {
            id: 3,
            name: 'Recursive Rigatoni',
            price: 17.00,
            rating: 5,
            category: 'mains',
            details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
        },
        {
            id: 4,
            name: 'Pumpkin Pi Squared',
            price: 3.14,
            rating: 5,
            category: 'desserts',
            details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
        },
        {
            id: 5,
            name: 'Fibonacci String Bean Fries',
            price: 11.23,
            rating: 5,
            category: 'sides',
            details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
        }
    ]
}


app.get('/', (req, res) => {
    res.render('home.ejs', {
        restaurant: restaurant,

    });
});

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {
        restaurant: restaurant
    })
})

app.get('/menu/:category', (req, res) => {
    const requestedCategory = req.params.category.toLowerCase()
    console.log(requestedCategory)
    let menuItems = []
    menuItems = restaurant.menu.filter(item => item.category === requestedCategory)
    console.log(menuItems)
if (menuItems.length > 0) {
        res.render('category.ejs', {category: requestedCategory, 
            menuItems: menuItems,
        });
      } else {
        res.status(404).render('error', { message: `No items found for category: ${requestedCategory}` });
    }
    // res.render('category.ejs')

   
    
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});