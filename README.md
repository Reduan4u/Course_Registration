# Course Registration
Live Site Link: [https://a7-course-registration.netlify.app/]

Question 01: 
            Top 3 Features of this application:-

                1. Detailed course information.
                2. Easy to add on the cart menu. 
                3. Easy to calculate the total cost and course credit hours.


Question 02: 
            useState Uses:-

                 I have used few state (4 in the root App.jsx and 1 in the Courses component) to get and store data in this application. 

            1.const [cartedCourses, setCartedCourses] = useState([]);
              🔰This state keeps an array of selected courses that the user has added to their cart.
            2.const [creditHour, setCreditHour] = useState(parseInt("00", 10));
              🔰It represents the total credit hours of the selected courses and initializes it to 0.
            3.const [creditHourRemaining, setCreditHourRemaining] = useState(20);
              🔰This state managed the remaining credit hours that the user have and initialized to 20.
            4.const [totalPrice, setTotalPrice] = useState(0);
              🔰It keeps track of the total price of the selected courses and starts with an initial value of 0.

                 I have only one clickable action (handleSelect) to perform all the activities and thats why I updated these state based on there actions. These states and the handleSelect function work together to manage the user's course selection, credit hours, and cart total in the course registration application.

                 Another state from the Courses.jsx component is, 

            1.const [courses, setCourses] = useState([]);
              🔰This state managed to fetch and display the courses data. This data is then passed to child components (Course) for rendering and further handling.





