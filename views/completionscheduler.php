<article class="rm-Article" id="content">
  <header id="content-head">
    <div class="row clearfix">
      <div class="col-xs-9">
        <h1>Response Limits</h1>
        <div class="excerpt">
          <div class="rm-Markdown markdown-body" data-testid="RDMD">
            <p>Control how many responses are received over defined intervals. This helps pace fielding instead of receiving all completes at once.</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="grid-container-fluid" id="content-container">
    <section class="content-body grid-100">
      <div class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">

        <span style="display:block;">
          <img src="images/CompletionScheduler2.png" alt="Response Limits"
            class="screenshot-image"
            onclick="expandImage(this)">
        </span>

        <h2 class="heading heading-2 header-scroll" id="fields">
          <div class="heading-text">Fields</div>
        </h2>
        <table class="modern-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Audience #2</strong></td>
              <td>Click the audience to open settings.</td>
            </tr>
            <tr>
              <td><strong>2. Scheduling Tab</strong></td>
              <td>Section where timing and pacing controls are set.</td>
            </tr>
            <tr>
              <td><strong>3. Response Limits</strong></td>
              <td>Main section to enable pacing for responses.</td>
            </tr>
            <tr>
              <td><strong>4. Interval Setup</strong></td>
              <td>Defines the pacing interval (e.g., hours, days, weeks).</td>
            </tr>
            <tr>
              <td><strong>5. Interval</strong></td>
              <td>The length of each time window (e.g., 1 day, 2 hours).</td>
            </tr>
            <tr>
              <td><strong>6. Request</strong></td>
              <td>The number of completes allowed per interval.</td>
            </tr>
            <tr>
              <td><strong>7. Completes</strong></td>
              <td>The cap for responses during each interval.</td>
            </tr>
            <tr>
              <td><strong>8. Build Schedule</strong></td>
              <td>Confirms and generates the pacing intervals.</td>
            </tr>
            <tr>
              <td><strong>9. Interval Tracker</strong></td>
              <td>Displays all scheduled intervals, with start times, caps, and status.</td>
            </tr>
            <tr>
              <td><strong>10. Schedule at Launch</strong></td>
              <td>First interval begins as soon as the survey launches.</td>
            </tr>

            <tr>
              <td><strong>11. Delete Schedule</strong></td>
              <td>Removes all pacing intervals if you want to revert to unlimited responses.</td>
            </tr>
          </tbody>
        </table>
        <span style="display:block;">
          <img src="images/CompletionScheduler.png" alt="Response Limits"
            class="screenshot-image"
            onclick="expandImage(this)">
        </span>
        <h2 class="heading heading-2 header-scroll" id="how-it-works">
          <div class="heading-text">How It Works</div>
        </h2>
        <ol>
          <li>Define an Interval (timeframe) and set the number of completes allowed.</li>
          <li>Click <strong>Build Schedule</strong> → system generates pacing intervals.</li>
          <li>When the audience is launched, the first interval activates automatically.</li>
          <li>If the response cap is reached before the interval ends, collection pauses.</li>
          <li>At the next interval, collection resumes automatically.</li>
          <li>You can monitor progress in the Interval Tracker.</li>
          <li>Works in tandem with Start/Stop Time and Soft Launch for complete control.</li>
          <li>Spreads out responses evenly, preventing overload and ensuring more stable data quality.</li>
        </ol>

      </div>

      <div class="UpdatedAt">
        <p class="DateLine"><i class="icon icon-watch"></i>Updated October 2025</p>
      </div>
      <hr class="NextStepsDivider" />
      <nav aria-label="Pagination Controls" class="PaginationControlsjDYuqu8pBMUy rm-Pagination"></nav>
    </section>
  </div>
</article>