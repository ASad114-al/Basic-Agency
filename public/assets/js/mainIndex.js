function showHam(){
    console.log("working")
    document.getElementById("hamburger").className=("show");
    document.getElementById("hamburger").innerHTML = 
    `
    <section>
        <p>(6) Internal Works <br> ©2020 c/o BASIC®</p>
        <p>A collection of internal project and initiatives under <br> the BASIC® brand.</p>
        <div><img src="assets/img/close_Hamburger.png" alt="" onclick="closeHam()"></div>
    </section>
   
    <section class="hamCards">
        <section class="hamCardsSec">
            <article>
                <div class="line"></div>
                <div class="num">01</div>
            </article>
            <article class="hamCardsArt">
                <img class="hamImg" src="assets/img/selected-work1.jpg" alt="">
                <div>
                    <h3>Culture Manual® ©2018</h3>
                    <p>Agency Culture & Onboarding</p>
                    <button class="hamBtn">VISIT THE SITE</button>
                    <div class="hamShowUp"><p >To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.</p></div>
                </div>
            </article>
        </section>
        <section class="hamCardsSec">
            <article>
                <div class="line"></div>
                <div class="num">02</div>
            </article>
            <article class="hamCardsArt">
                <img class="hamImg" src="assets/img/selected-work2.jpg" alt="">
                <div>
                    <h3>Moves® ©2019</h3>
                    <p>Our New HQ</p>
                    <button class="hamBtn">VISIT THE SITE</button>
                    <div class="hamShowUp"><p>When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.</p></div>
                </div>
            </article>
        </section>
        <section class="hamCardsSec">
            <article>
                <div class="line"></div>
                <div class="num">03</div>
            </article>
            <article class="hamCardsArt">
                <img class="hamImg" src="assets/img/selected-work3.jpg" alt="">
                <div>
                    <h3>Culture Manual® ©2018</h3>
                    <p>Agency Culture & Onboarding</p>
                    <button class="hamBtn">VISIT THE SITE</button>
                    <div class="hamShowUp"><p>To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.</p></div>
                </div>
            </article>
        </section>  
        
        <section class="hamCardsSec">
            <article>
                <div class="line"></div>
                <div class="num">04</div>
            </article>
            <article class="hamCardsArt">
                <img class="hamImg" src="assets/img/selected-work4.jpg" alt="">
                <div>
                    <h3>Culture Manual® ©2018</h3>
                    <p>Agency Culture & Onboarding</p>
                    <button class="hamBtn">VISIT THE SITE</button>
                    <div class="hamShowUp"><p>To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.</p></div>
                </div>
            </article>
        </section> 
        <section class="hamCardsSec">
            <article>
                <div class="line"></div>
                <div class="num">05</div>
            </article>
            <article class="hamCardsArt">
                <img class="hamImg" src="assets/img/selected-work5.jpg" alt="">
                <div>
                    <h3>Culture Manual® ©2018</h3>
                    <p>Agency Culture & Onboarding</p>
                    <button class="hamBtn">VISIT THE SITE</button>
                    <div class="hamShowUp"><p>To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.</p></div>
                </div>
            </article>
        </section> 
    </section>
  
    `
}
function closeHam(){
    console.log("close button is working")
    document.getElementById("hamburger").className=("unshow");  
   
}