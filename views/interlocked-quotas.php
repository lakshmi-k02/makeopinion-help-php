<article class="rm-Article" id="content">
    <header id="content-head">
        <div class="row clearfix">
            <div class="col-xs-9">
                <h1>Interlocked Quotas</h1>
                <div class="excerpt">
                    <div class="rm-Markdown markdown-body" data-testid="RDMD">
                        <p>Interlocked quotas allow you to define combinations of demographic variables, like Age and Gender, and control how many respondents fall into each exact segment (e.g., Males aged 25–34). This helps ensure balanced representation across multiple dimensions.</p>
                        <p>Instead of setting quotas separately for each question, interlocking lets you define a matrix of combined variables. This is useful for national representativity, segmentation, or avoiding overrepresentation in certain cross-sections.</p>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="grid-container-fluid" id="content-container">
        <section class="content-body grid-100">
            <div class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">

                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">How to Access Interlocked Quotas</div>
                </h2>
                <ul>
                    <li>Open Your Audience Settings</li>
                    <li>Click the dropdown beside your selected audience and choose Interlock / Nest Quotas.</li>
                    <span style="display:block;">
                        <img src="images/Interlocked-Quotas1.png" alt="Interlocked-Quotas"
                            class="screenshot-image"
                            onclick="expandImage(this)">
                    </span>

                    <li>Choose a Setup Option:
                        <ul>
                            <li>In the new window, you can either:</li>
                            <ul>
                                <li>Add a custom interlocked quota (manually define segments for specific combinations, such as Age x Gender).</li>
                                <li>Interlock Age and Gender (auto-generate all combinations).</li>
                            </ul>
                        </ul>
                    </li>
                    <span style="display:block;">
                        <img src="images/Interlocked-Quotas2.png" alt="Interlocked-Quotas"
                            class="screenshot-image"
                            onclick="expandImage(this)">
                    </span>
                </ul>
                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">Creating an Interlocked Quota</div>
                </h2>
                <p>Once inside the interlock builder:</p>

                <span style="display:block;">
                    <img src="images/Interlocked-Quotas3.png" alt="Interlocked-Quotas"
                        class="screenshot-image"
                        onclick="expandImage(this)">
                </span>
                <h2 class="heading heading-2 header-scroll" id="fields">
                    <div class="heading-text">Fields</div>
                </h2>
                <table class="modern-table" >
                    <thead>
                        <tr>
                            <th>Button / Feature</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. Quota Name</td>
                            <td>Enter a name under <strong>Interlocked Quota Name</strong> to label your setup clearly.</td>
                        </tr>
                        <tr>
                            <td>2. Targeting Variables</td>
                            <td>Select which variables you want to combine, Age (e.g., 18–24, 25–34) and Gender (e.g., Male, Female, Other).</td>
                        </tr>
                        <tr>
                            <td>3. Quota Distribution</td>
                            <td>
                                Displays the generated matrix of all Age × Gender combinations. You can define for each row either:<br>
                                • Absolute count (e.g., <em>30 completes</em>)<br>
                                • Percentage of total audience (e.g., <em>15%</em>).
                            </td>
                        </tr>
                        <tr>
                            <td>4. Create New Quota</td>
                            <td>Starts a new custom interlocked setup from scratch.</td>
                        </tr>
                        <tr>
                            <td>5. Interlock Age with Gender</td>
                            <td>Automatically generates a complete matrix of all Age × Gender combinations for faster setup.</td>
                        </tr>
                        <tr>
                            <td>6. Calculate Feasibility</td>
                            <td>Previews whether your selected targets are achievable based on the total requested completes.</td>
                        </tr>
                        <tr>
                            <td>7. Save Quotas</td>
                            <td>Once finalized, click <strong>Save quotas</strong> to confirm and apply your interlocked configuration.</td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="heading heading-2 header-scroll" id="how-it-behaves">
                    <div class="heading-text">How It Behaves</div>
                </h2>
                <ul class="space-y-2 modern-list">
                    <li>Interlocked quotas take precedence over simple individual question quotas</li>
                    <li>Respondents must match a specific Age + Gender pair to enter a given quota group</li>
                    <li>Once a quota group is full, the system automatically redirects or blocks new respondents from that segment</li>
                    <li>Use this to create highly specific, balanced datasets, ideal for nationally representative samples, product testing, or segmented analysis.</li>
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