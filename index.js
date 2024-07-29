/*Media queries for responsiveness */
@media (max-width: 768px) {
    .header-content img.profile-picture {
        width: 120px;
        height: 120px;
    }
}

.header-content h1 {
        font-size: 2rem; /* Adjusted font size for smaller screens */
    }

    .section {
        padding: 1.5rem;
        font-size: 0.9rem; /* Smaller text size */
    }
</style>

</head>
<body>
<i class="fa-brands fa-instagram"></i>
<center>
<button onclick="showAlert()"> click here></button>
<script>
    function showAlert() {
        alert("Hello,Welcome To DYPSST");
     }
</script>

<header>
    <div class="header-content"><center>
        <img src="data:image/jpeg;base64,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"alt="Your Profile Picture" class="profile-picture">
        <h1>DR.D.Y.PATIL SCHOOL OF SCIENCE AND TECHNOLOGY</h1>
        <h2> DR.D.Y.Patil Vidyapeeth Pune</h2>
        <h3>(Deemed to be university)</h3>
    </div>
</header>

<nav>
    <ul>
        <li><a href="#ABOUT">About</a></li>
        <li><a href="#COURSE">Details</a></li>
        <li><a href="#CONTACT">Contact</a></li>
    </ul>    
</nav>

<section id="ABOUT" class="section">
    <h2>ABOUT US</h2>
     <p> The Dr. D. Y. Patil School of Science & Technology at Dr. D. Y. Patil Vidyapeeth (DPU) offers undergraduate programs in
      <p>  B. Tech. (Computer Science and Design) and B. Tech.(Artificial Intelligence and Data Science).
        DPU envisions to be one of the largest learning education universities in India providing quality education to aspiring students in the creative field. To provide students with a wholesome learning environment, a well-developed infrastructure has been facilitated at the DPU campus.
        In order to ensure the best quality education, DPU has onboard a team of the best academic resources for teaching, webinar, workshops, and other academic activities from the industry. Students will get a chance to be mentored by leading academicians and industry experts.
     </p>The research experts and domain heads strive to make sure that the curriculum offered is industry competent and relevant
     </p>
</section>

<section id="COURSE" class="section">
    <h2>Details about Courses</h2>
    <p><b>B.tech(AI & DS):</b> Artificial Inteligence and Data science</p>
    <p><b>B.tech (CSD):</b> Computer Science and design</p>
    <p><b>BSC-BCS:</b> Computer Science</p>
    <p><b> BCA:</b>Computer Application</p>
</section>

<section id="CONTACT" class="section">
    <h2>Contact</h2>
    <p>Please mail for any support or enquiry:</p>
    <p><b>Email:</b> info.dypsst@dpu.edu.in</p>
    <p><b>Collage Address:</b>Dr. D. Y. Patil Vidyapeeth, Pune
        Dr. D. Y. Patil School of Science and Technology,
        Survey No 87/88,
        Mumbai Bangalore Express Highway,
        Tathawade, Pune-411 033 India.</p>
</section>

<footer>
    <p>&copy;Copyright ©2024 All Rights Reserved | 
        By Software Development Cell, Dr. D. Y. Patil Vidyapeeth, Pune
         Site Updated On : 25/ 07/ 2024</p>
</footer>

</body>
</html>

</style>
</head>
<body>

</body>
</html>