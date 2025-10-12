<article class="rm-Article" id="content">
  <header id="content-head">
    <div class="row clearfix">
      <div class="col-xs-9">
        <h1>Completion Scheduler</h1>
        <div class="excerpt">
          <div class="rm-Markdown markdown-body" data-testid="RDMD">
            <p>Control the pace of data collection by limiting the number of responses received over time.</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="grid-container-fluid" id="content-container">
    <section class="content-body grid-100">
      <div class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">

        <h2 class="heading heading-2 header-scroll" id="what-it-does">
          <div class="heading-text">What It Does?</div>
        </h2>
        <p>Lets you manage how many responses are collected per hour, day, week, or custom period to avoid spikes and ensure smoother data flow.</p>

        <h2 class="heading heading-2 header-scroll" id="how-to-enable">
          <div class="heading-text">How to Enable?</div>
        </h2>
        <h4>From Create Survey:</h4>
        <ul>
          <li>Click <strong>Start a Project</strong> in the upper-right corner of your account.</li>
          <li>Choose one of the options: <strong>Get Survey Participants</strong>, <strong>Start a new survey</strong>, or <strong>Select Survey Templates</strong>.</li>
        </ul>
        <h4>From Edit Survey:</h4>
        <ul>
          <li><strong>Access the Project</strong>: Navigate to the project where you want to enable the completion scheduler feature.</li>
          <li><strong>Select the Audience</strong>: Open the audience you want to configure for completion scheduler.</li>
        </ul>
        <h4>Edit Audience Settings:</h4>
        <ol>
          <li>Go to <strong>Edit Audience</strong>.</li>
          <li>Navigate to the <strong>Scheduling</strong> tab.</li>
        </ol>
        <h4>Enable Completion Scheduler:</h4>
        <ol>
          <li>Locate the “Completion Scheduler” section.</li>
               <span style="display:block;">
          <img src="images/CompletionScheduler.png" alt="Completion Scheduler"
            class="screenshot-image"
            onclick="expandImage(this)">
        </span>
          <li>Activate it using the toggle.</li>
          <li>Define interval duration (e.g., hours or days).</li>
          <li>Specify the number of completes allowed per interval.</li>
          <li>Click <strong>Build Schedule</strong> to confirm settings.</li>
        </ol>
        <p><strong>Save Changes:</strong> Click <strong>Save</strong> to apply your settings. Once saved, pacing limits will begin when the audience is launched.</p>

        <h2 class="heading heading-2 header-scroll" id="fields">
          <div class="heading-text">Fields</div>
        </h2>
        <table class="modern-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Meaning</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enabled</td>
              <td>Turns Completion Scheduler on/off</td>
              <td>Toggle switch</td>
            </tr>
            <tr>
              <td>Interval</td>
              <td>Time period used for pacing</td>
              <td>Choose from hours/days/custom</td>
            </tr>
            <tr>
              <td>Request</td>
              <td>Number of completes allowed per interval</td>
              <td>Required when enabled</td>
            </tr>
            <tr>
              <td>Build Schedule</td>
              <td>Confirms and applies interval logic</td>
              <td>Must be clicked to activate</td>
            </tr>
          </tbody>
        </table>

        <h2 class="heading heading-2 header-scroll" id="how-it-behaves">
          <div class="heading-text">How It Behaves</div>
        </h2>
        <ul class="space-y-2 modern-list">
          <li>Pacing starts once the audience is launched.</li>
          <li>Responses are collected based on the specified interval and cap.</li>
          <li>If the interval cap is reached, data collection pauses until the next interval.</li>
          <li>Helps prevent overload and ensures higher data quality.</li>
          <li>Works seamlessly with other scheduling features.</li>
        </ul>

      </div>

      <div class="UpdatedAt">
        <p class="DateLine"><i class="icon icon-watch"></i>Updated October 2025</p>
      </div>
      <hr class="NextStepsDivider" />
      <nav aria-label="Pagination Controls" class="PaginationControlsjDYuqu8pBMUy rm-Pagination"></nav>
    </section>
  </div>
</article>