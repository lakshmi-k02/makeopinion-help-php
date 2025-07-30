<article class="rm-Article" id="content">
  <header id="content-head">
    <div class="row clearfix">
      <div class="col-xs-9">
        <h1>Audience Eliminations</h1>
        <div class="excerpt">
          <div class="rm-Markdown markdown-body" data-testid="RDMD">
            <p>Exclude specific respondents to ensure fresh participation.</p>
            <p>Allows you to <strong>exclude respondents</strong> who have previously participated in other surveys or match a list of uploaded IDs. This helps prevent repeat participation, avoids survey fatigue, and improves the overall quality of your sample.</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="grid-container-fluid" id="content-container">
    <section class="content-body grid-100">
      <div style="margin-left:31px" class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">

        <h2 class="heading heading-2 header-scroll" id="how-to-enable">
          <div class="heading-text">How to Enable?</div>
        </h2>
        <p><strong>From Design Tab:</strong></p>
        <ul>
          <li><strong>Access the Project</strong>: Open the survey project you’re working on.</li>
          <li><strong>Select the Audience</strong>: Use the “Select Audience” dropdown to choose your audience.</li>
          <li><strong>Edit Audience Settings</strong>:
            <ul>
              <li>Click the <strong>⚙️ Edit Audience</strong> icon next to the add new audience.</li>
              <li>Navigate to the <strong>Eliminations</strong> tab.</li>
                   <span style="display:block;">
          <img src="images/AudienceEliminations.png" alt="Audience Eliminations"
            style="margin-top: 10px; max-width: 60%; height:60%; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; transition: box-shadow 0.2s;"
            onclick="expandImage(this)">
        </span>
            </ul>
          </li>
        </ul>

        <p><strong>Enable Eliminations:</strong></p>
        <ul>
          <li>Turn the <strong>Eliminations</strong> toggle to <strong>Enabled</strong>.</li>
          <li>Choose one or both of the following:
            <ul>
              <li><strong>Previous Audiences</strong>: Select earlier survey projects to exclude respondents from.</li>
              <li><strong>Upload Users</strong>: Upload a file containing user IDs you wish to block.</li>
            </ul>
          </li>
        </ul>
        <p><strong>Save Changes</strong> to apply your settings.</p>

        <h2 class="heading heading-2 header-scroll" id="fields">
          <div class="heading-text">Fields</div>
        </h2>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Meaning</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Enabled</strong></td>
              <td>Turns Eliminations on/off</td>
              <td>Toggle switch</td>
            </tr>
            <tr>
              <td><strong>Previous Audiences</strong></td>
              <td>Exclude users from earlier surveys</td>
              <td>Multiple audiences can be selected</td>
            </tr>
            <tr>
              <td><strong>Upload Users</strong></td>
              <td>Manually block user IDs via upload</td>
              <td>CSV file with unique respondent identifiers</td>
            </tr>
          </tbody>
        </table>

        <h2 class="heading heading-2 header-scroll" id="how-it-behaves">
          <div class="heading-text">How It Behaves</div>
        </h2>
        <ul class="space-y-2">
          <li>Respondents included in selected audiences or uploaded files are <strong>automatically excluded</strong> from participation.</li>
          <li>Eliminations apply <strong>only to the selected audience</strong>, not the whole project.</li>
          <li>Eliminated users won’t see or access the survey during fielding.</li>
          <li>Useful for running <strong>net-new recruitments</strong> and avoiding duplicate entries across studies.</li>
        </ul>

      </div>

      <div class="UpdatedAt">
        <p class="DateLine"><i class="icon icon-watch"></i>Updated June 2025</p>
      </div>
      <hr class="NextStepsDivider" />
      <nav aria-label="Pagination Controls" class="PaginationControlsjDYuqu8pBMUy rm-Pagination"></nav>
    </section>
    <!-- <section class="content-toc grid-25"></section> -->
  </div>
</article>
