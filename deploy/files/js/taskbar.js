const makeMenuBar = document.getElementById("startmenu");

if (makeMenuBar.classList.contains("discretion--page")) {
  makeMenuBar.innerHTML = `
          <div class="start__head">
            <div class="title-bar">
              <div class="title-bar__text">
                strayOS
              </div>
            </div>
          </div>
          <div class="start__content">
            <div class="entry__container
                  sfx-access-denied">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_world-logo-1.png" alt="">
                </div>
                <div class="entry--text">
                  System BIOS
                </div>
              </div>
            </div>
            <div class="entry__container
                  sfx-access-denied">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_notepad.png" alt="">
                </div>
                <div class="entry--text">
                  Log Entries
                </div>
              </div>
            </div>
            <div class="entry__container
                 sfx-access-denied">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_appwizard.png" alt="">
                </div>
                <div class="entry--text">
                  Repositories
                </div>
              </div>
            </div>
            <hr>
            <div class="entry__container
                 sfx-access-denied">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_directory-open.png" alt="">
                </div>
                <div class="entry--text">Attributions
                </div>
              </div>
            </div>
            <div class="copyheart">
              <div class="status-bar">
                <div class="status-bar__field">
                  ♡2024 by strayOS.
                </div>
              </div>
            </div>
          </div>`
} else {
  makeMenuBar.innerHTML = `
          <div class="start__head">
            <div class="title-bar">
              <div class="title-bar__text">
                strayOS
              </div>
            </div>
          </div>
          <div class="start__content">
            <div class="entry__container sfx-ok-pc" id="systemBIOS">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_world-logo-1.png" alt="">
                </div>
                <div class="entry--text">
                  System BIOS
                </div>
              </div>
              <div id="submenu_systemBIOS" class="subentry__container window">
                <a class="sub-entry sfx-ok" href="/bios">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_hardware.png" alt="">
                  </div>
                  <div>
                    Hardware
                  </div>
                </a>
                <a class="sub-entry sfx-ok" href="/bios/components">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_expansion-board.png" alt="">
                  </div>
                  <div>
                    Components
                  </div>
                </a>
              </div>
            </div>
            <div class="entry__container sfx-ok-pc" id="logs">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_notepad.png" alt="">
                </div>
                <div class="entry--text">
                  Log Entries
                </div>
              </div>
              <div id="submenu_logs" class="subentry__container window">
                <a class="sub-entry sfx-ok" href="/blog">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_notepad-file.png" alt="">
                  </div>
                  <div>
                    Blog Posts
                  </div>
                </a>
                <a class="sub-entry sfx-ok" href="/logs/journals">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_desktop.png" alt="">
                  </div>
                  <div>
                    Personal Journals
                  </div>
                </a>
              </div>
            </div>
            <div class="entry__container sfx-ok-pc" id="repositories">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_appwizard.png" alt="">
                </div>
                <div class="entry--text">
                  Repositories
                </div>
              </div>
              <div class="subentry__container window" id="submenu_repositories">
                <a class="sub-entry sfx-ok" href="/repository/quotes">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_webfile-set-1.png" alt="">
                  </div>
                  <div>
                    Quote Repository
                  </div>
                </a>
                <a class="sub-entry sfx-ok" href="/repository/games">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_joystick.png" alt="">
                  </div>
                  <div>
                    Game Repository
                  </div>
                </a>
                <a class="sub-entry sfx-ok" href="/repository/film">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_moviemaker.png" alt="">
                  </div>
                  <div>
                    Film/TV Repository
                  </div>
                </a>
                <a class="sub-entry sfx-ok" href="/repository/resources">
                  <div class="entry--icon">
                    <img src="/files/icons/sOS_briefcase.png" alt="">
                  </div>
                  <div>
                    Resource Repository
                  </div>
                </a>
              </div>
            </div>
            <hr>
            <a id="attributions" href="/attributions" class="entry__container sfx-ok-pc">
              <div class="entry">
                <div class="entry--icon">
                  <img src="/files/icons/sOS_directory-open.png" alt="">
                </div>
                <div class="entry--text">
                  Attributions
                </div>
              </div>
            </a>
            <div class="copyheart">
              <div class="status-bar">
                <div class="status-bar__field">
                  ♡2024 by strayOS.
                </div>
              </div>
            </div>
          </div>`;
}

const changelog = document.getElementById("changelog-posts");

if (changelog) {
  changelog.innerHTML = 
  `
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        changes: /root.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-10-02">02oct</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        changes: reordered /root elements;<br>
        additions: couple new posts on the microblog.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        changes: #taskbar.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-10-01">01oct</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        changes: changelog and microblog can now be accessed site-wide via the taskbar, space made for other elements in /root.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        changes: /root.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-09-30">30sept</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        additions: queue (to-do list), directory (quick-links), slot for future webrings; all on /root.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        new: /root.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-09-30">30sept</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        additions: a homepage containing a changelog, guestbook, & microblog.
      </p>
    </div>
  </div>
  `
}

const microblog = document.getElementById("microblog-posts");

if (microblog) {
  microblog.innerHTML = 
  `
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        optimizations needed.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-10-01 03:54">02oct 4am</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        active updates may be put on hold; optimizations to code are much needed already, with the stylesheets and scripts a mess. it would rather be that this is gotten under control prior to continuing, please stand by.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        deploy2nekoweb.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-10-01 01:09">02oct 1am</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        successfully set up deploy2nekoweb; updates will be much more convenient to put out from here on out.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="briefpost">
    <div class="briefpost__head">
      <div class="briefpost__title">
        setting up.
      </div>
      <div class="briefpost__time">
        <time datetime="2024-09-30 16:28">30sept 4pm</time>
      </div>
    </div>
    <div class="briefpost__body">
      <p>
        going to be able to work on the rest of this site soon. finally finished with setting up the primary functions. it will be slow, however.
      </p>
    </div>
  </div>
  `
}