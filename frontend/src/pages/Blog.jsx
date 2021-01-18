import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <Header />
      <div className="image_blog">
        <figure>
          <img src="/images/blog.jpg" alt="" />
          <p className="blog_head">The Blog</p>
        </figure>
      </div>

      <div className="blog_section">
        <div className="blogs">
          <h1>Your Blog Title</h1>
          <div className="blog_section_image">
            <figure>
              <img src="/images/blog.jpg" alt="" />
            </figure>
          </div>
          <div className="written_blogs">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              consequatur error, atque quam fuga magnam odit deserunt distinctio
              est harum, porro numquam placeat aliquam eveniet dignissimos, quos
              totam blanditiis. Dolorum minima suscipit quae illo quia magni
              voluptatem nesciunt similique, sit distinctio. Similique delectus
              ad natus placeat ratione laborum veritatis cupiditate nemo autem
              voluptates, fuga itaque assumenda aspernatur deserunt totam. Porro
              sit impedit dolorem ipsa. Dolorem iste cum facilis, consequatur
              eum placeat. Nihil fugit incidunt ipsum eos perspiciatis aut
              quidem eaque reprehenderit ullam dicta praesentium voluptates non
              tenetur, ipsam dolor voluptatum inventore doloremque cum itaque!
              Ut architecto consequatur facere natus laudantium eveniet tempora.
              Beatae consequuntur debitis magnam quo sequi repellendus quis
              dolor aperiam, cumque consequatur placeat nulla minus nisi?
              Delectus iste exercitationem, tenetur vero accusantium, ea rem
              ratione officiis ipsa beatae atque architecto. Ducimus commodi
              quam sunt exercitationem aperiam? Totam libero a vel, architecto
              quo obcaecati accusamus natus nemo culpa minus cumque, ex nam.
              Cupiditate delectus adipisci consequuntur, quos, ea sequi nemo
              doloremque eum et qui corrupti necessitatibus, iure quo saepe.
              Ipsam mollitia nesciunt dolor rerum dignissimos quos harum
              incidunt corporis. Maxime sit cumque recusandae reprehenderit vero
              esse ab dolore possimus modi omnis reiciendis earum voluptates
              harum non molestias, laborum consectetur.
            </p>
          </div>
        </div>

        <div className="categories_section">
          <h1>CATEGORIES</h1>
          <ul className="category_list">
            <li className="category_item">Medical</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
