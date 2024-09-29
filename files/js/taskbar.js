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
                    <img src="/files/icons/strayOS_directory-1.png" alt="">
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
                  <a class="start-entry-more sfx-ok" href="/bios/">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_hardware-1.png" alt="">
                    </div>
                    <div>
                      Hardware
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/bios/components">
                    <div class="start-entry-more-icon">
                      <img src="/files/icons/strayOS_chip-ramdrive-1.png" alt="">
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
                      <img src="/" alt="">
                    </div>
                    <div>
                      Blog Posts
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/logs/journals">
                    <div class="start-entry-more-icon">
                      <img src="/" alt="">
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
                    <img src="/files/icons/strayOS_directory-1.png" alt="">
                  </div>
                  <div class="start-entry-text">
                    Repositories
                  </div>
                </div>
                <div class="start-entry-more-cn window" id="submenu_repositories">
                  <a class="start-entry-more sfx-ok" href="/repository/quotes">
                    <div class="start-entry-more-icon">
                      <img src="/" alt="">
                    </div>
                    <div>
                      Quote Repository
                    </div>
                  </a>
                  <a class="start-entry-more sfx-ok" href="/repository/resources">
                    <div class="start-entry-more-icon">
                      <img src="/" alt="">
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
                  <div class="start-entry-text">Attributions
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