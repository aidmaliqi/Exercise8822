export function LeftSection () {
    return(
        <nav className="left-section">
      <div className="navigation-items">
        <div className="logo-container">
          <img src="/src/assets/Twitter-logo.svg.png" alt="" className="logo-img" />
        </div>
        <ul className="navigation-list">
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> home </span>
              <p className="navigation-item-text">Home</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> tag </span>
              <p className="navigation-item-text">Explore</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> notifications </span>
              <p className="navigation-item-text">Notifications</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> mail </span>
              <p className="navigation-item-text">Messages</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> bookmark </span>
              <p className="navigation-item-text">Bookmarks</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> list_alt </span>
              <p className="navigation-item-text">Lists</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> person </span>
              <p className="navigation-item-text">Profile</p>
            </li></a
          >
          <a href="#" className="nav-link">
            <li className="navigation-item">
              <span className="material-symbols-outlined"> pending </span>
              <p className="navigation-item-text">More</p>
            </li></a
          >
        </ul>
        <div className="button18-container">
          <button className="button-18" role="button">TWEET</button>
        </div>
      </div>
      <div className="profile-section">
        <div className="round-div"></div>
        <section className="profile-section-text">
          <p><strong>Aid Maliqi </strong></p>
          <p>@MaliqiAid</p>
        </section>
        <span className="material-symbols-outlined"> more_horiz </span>
      </div>
    </nav>
    )
}