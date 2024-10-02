const makeMenuBar = document.getElementById("menu-cn");

if (makeMenuBar.classList.contains("discretion-page")) {
  makeMenuBar.innerHTML = `
        <div id="menu">
          <div id="menu-title">
            <div class="title-bar">
              <div class="title-bar-text">
                strayOS
              </div>
            </div>
          </div>
          <div id="menu-content-cn">
            <div id="menu-content">
              <div class="start-entry sfx-access-denied">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_update.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    System BIOS
                  </div>
                </div>
              </div>
              <div class="start-entry sfx-access-denied">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_notepad-1.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Log Entries
                  </div>
                </div>
              </div>
              <div class="start-entry sfx-access-denied">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_appwizard.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Repositories
                  </div>
                </div>
              </div>
              <hr>
              <div class="start-entry sfx-access-denied">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_directory-2.png" alt="">
                  </div>
                  <div class="start-entry-text"">Attributions
                  </div>
                </div>
              </div>
              <div id="copy">
                <div class="status-bar">
                  <div class="status-bar-field">
                    ♡2024 by strayOS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
} else {
  makeMenuBar.innerHTML = `
        <div id="menu">
          <div id="menu-title">
            <div class="title-bar">
              <div class="title-bar-text">
                strayOS
              </div>
            </div>
          </div>
          <div id="menu-content-cn">
            <div id="menu-content">
              <div class="start-entry sfx-ok-pc" id="systemBIOS">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_update.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    System BIOS
                  </div>
                </div>
                <div id="submenu_systemBIOS" class="start-entry-more-cn window">
                  <a class="start-entry-more sfx-ok" href="/bios">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_hardware-1.png" alt="">
                    </div>
                    <div>
                      Hardware
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/bios/components">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_ramdrive.png" alt="">
                    </div>
                    <div>
                      Components
                    </div>
                  </a>
                </div>
              </div>
              <div class="start-entry sfx-ok-pc" id="logs">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_notepad-1.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Log Entries
                  </div>
                </div>
                <div id="submenu_logs" class="start-entry-more-cn window">
                  <a class="start-entry-more sfx-ok" href="/blog">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_win3.png" alt="">
                    </div>
                    <div>
                      Blog Posts
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/logs/journals">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_signaturexcl.png" alt="">
                    </div>
                    <div>
                      Personal Journals
                    </div>
                  </a>
                </div>
              </div>
              <div class="start-entry sfx-ok-pc" id="repositories">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_appwizard.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Repositories
                  </div>
                </div>
                <div class="start-entry-more-cn window" id="submenu_repositories">
                  <a class="start-entry-more sfx-ok" href="/repository/quotes">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_fileset.png" alt="">
                    </div>
                    <div>
                      Quote Repository
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/repository/resources">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_pc-grad.png" alt="">
                    </div>
                    <div>
                      Resource Repository
                    </div>
                  </a>
                </div>
              </div>
              <hr>
              <a id="attributions" href="/attributions" class="start-entry sfx-ok-pc">
                <div class="start-entry-main">
                  <div class="start-entry-icon">
                    <img src="/files/icons/strayOS_directory-2.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Attributions
                  </div>
                </div>
              </a>
              <div id="copy">
                <div class="status-bar">
                  <div class="status-bar-field">
                    ♡2024 by strayOS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}

const changelog = document.getElementById("changelog-cn");

if (changelog) {
  changelog.innerHTML = 
  `
  <div class="cl-post">
    <div class="cl-head">
      <div class="cl-title">
        changes: #taskbar.
      </div>
      <div class="cl-timestamp">
        <time datetime="2024-10-01">01oct</time>
      </div>
    </div>
    <div class="cl-body">
      <p>
        changes: changelog and microblog can now be accessed site-wide via the taskbar, space made for other elements in /root.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="cl-post">
    <div class="cl-head">
      <div class="cl-title">
        changes: /root.
      </div>
      <div class="cl-timestamp">
        <time datetime="2024-09-30">30sept</time>
      </div>
    </div>
    <div class="cl-body">
      <p>
        additions: queue (to-do list), directory (quick-links), slot for future webrings; all on /root.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="cl-post">
    <div class="cl-head">
      <div class="cl-title">
        new: /root.
      </div>
      <div class="cl-timestamp">
        <time datetime="2024-09-30">30sept</time>
      </div>
    </div>
    <div class="cl-body">
      <p>
        additions: a homepage containing a changelog, guestbook, & microblog.
      </p>
    </div>
  </div>
  `
}

const microblog = document.getElementById("microblog-cn");

if (microblog) {
  microblog.innerHTML = 
  `
  <div class="micro-post">
    <div class="mp-head">
      <div class="mp-title">
        deploy2nekoweb.
      </div>
      <div class="mp-timestamp">
        <time datetime="2024-10-01 01:09">02oct 1am</time>
      </div>
    </div>
    <div class="mp-body">
      <p>
        successfully set up deploy2nekoweb; updates will be much more convenient to put out from here on out.
      </p>
    </div>
    <br><hr>
  </div>
  <div class="micro-post">
    <div class="mp-head">
      <div class="mp-title">
        setting up.
      </div>
      <div class="mp-timestamp">
        <time datetime="2024-09-30 16:28">30sept 4pm</time>
      </div>
    </div>
    <div class="mp-body">
      <p>
        going to be able to work on the rest of this site soon. finally finished with setting up the primary functions. it will be slow, however.
      </p>
    </div>
  </div>
  `
}