export function Main () {
    return(
        <main className="main">
      <div className="main-header">
        <h1>Home</h1>
        <span className="material-symbols-outlined"> auto_awesome </span>
      </div>
      <section className="tweet-creator">
        <div className="round-div"></div>

        <form action="" className="tweet-form">
          <div className="form-input">
            <input
              type="text"
              name="tweet-text-input"
              className="text-input"
              placeholder="What's happening?"
            />
            <a href="#" className="Everyone-can-reply"
              ><span className="material-symbols-outlined"> public </span>Everyone
              can reply</a
            >
          </div>
          <div className="tweeting">
            <nav className="nav-form-items">
              <span className="material-symbols-outlined form-items"> image </span>
              <span className="material-symbols-outlined form-items">
                gif_box
              </span>
              <span className="material-symbols-outlined form-items">
                bar_chart
              </span>
              <span className="material-symbols-outlined form-items"> mood </span>
              <span className="material-symbols-outlined form-items">
                pending_actions
              </span>
              <span className="material-symbols-outlined form-items">
                location_on
              </span>
            </nav>
            <div className="button-div">
              <button className="button-18" role="button">TWEET</button>
            </div>
          </div>
        </form>
      </section>
      <section className="post-elements-section">
        <ul className="post-element-ul">
          <li className="post-element">
            <div className="person"></div>
            <aside className="aside-elements">
              <div className="post-header">
                <span className="material-symbols-outlined"> comment </span>
                <p>Food</p>
                <a href="#">See more</a>
              </div>
              <div className="name-comment">
                <aside className="post-elements">
                  <strong>Aid_Maliqi</strong>
                  <span>@MaliqiAid</span>
                  <p>- 21h</p>
                </aside>
                <span>"Ready to read!?"</span>
              </div>
              <img src="/src/assets/books.jpeg" alt="" className="post-image" />

              <ul className="like-numbers">
                <li className="retweets">
                  <span className="material-symbols-outlined"> comment </span>
                  <span>11</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> cached </span>
                  <span>15</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> favorite </span>
                  <span>40</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> file_upload </span>
                </li>
              </ul>
            </aside>
          </li>
          <li className="post-element">
            <div className="person"></div>
            <aside className="aside-elements">
              <div className="post-header">
                <span className="material-symbols-outlined"> comment </span>
                <p>Food</p>
                <a href="#">See more</a>
              </div>
              <div className="name-comment">
                <aside className="post-elements">
                  <strong>Aid_Maliqi</strong>
                  <span>@MaliqiAid</span>
                  <p>- 21h</p>
                </aside>
                <span>"Ready for a bite!?"</span>
              </div>
              <img src="/src/assets/books.jpeg" alt="" className="post-image" />

              <ul className="like-numbers">
                <li className="retweets">
                  <span className="material-symbols-outlined"> comment </span>
                  <span>11</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> cached </span>
                  <span>15</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> favorite </span>
                  <span>40</span>
                </li>
                <li className="retweets">
                  <span className="material-symbols-outlined"> file_upload </span>
                </li>
              </ul>
            </aside>
          </li>
        </ul>
      </section>
    </main>
    )
}