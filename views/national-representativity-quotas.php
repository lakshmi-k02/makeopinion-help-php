<article class="rm-Article" id="content">
    <header id="content-head">
        <div class="row clearfix">
            <div class="col-xs-9">
                <h1>National Representativity Quotas</h1>
                <div class="excerpt">
                    <div class="rm-Markdown markdown-body" data-testid="RDMD">
                        <p>Use National Representativity tools to align your Age and Gender quotas with official population statistics.</p>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="grid-container-fluid" id="content-container">
        <section class="content-body grid-100">
            <div class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">

                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">How It Works</div>
                </h2>
                <p>National Representativity is available for Age and Gender prescreening questions. Once enabled, the system:</p>
                <ul>
                    <li>Structure your quota grid with standardized demographic ranges.</li>
                    <li>Applies nationally representative splits.</li>
                    <li>Enforces real-time balancing to match your configured targets.</li>
                </ul>
                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">Import NatRep Ranges (Age Only)</div>
                </h2>
                <p>This is the first step in applying National Representativity to Age quotas.</p>
                <ul>
                    <li>Automatically creates standard age brackets (e.g., 18–24, 25–34, etc.).</li>
                    <li>Based on official demographic data for the selected country.</li>
                    <li>Must be done before setting up distributions or quota targets.</li>
                </ul>
                <span style="display:block;">
                    <img src="images/NatRep1.png" alt="National Representativity Quotas"
                        class="screenshot-image"
                        onclick="expandImage(this)">
                </span>
                <h2 class="heading heading-2 header-scroll" id="fields">
                    <div class="heading-text">Fields (NatRep Range Setup – Age)</div>
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
                            <td>Question Label</td>
                            <td>Click the screening question you want to apply quotas to (e.g., “How old are you?”).</td>
                        </tr>
                        <tr>
                            <td>Targeting Toggle</td>
                            <td>When ON, only selected ranges will be targeted. When OFF, all are eligible.</td>
                        </tr>
                        <tr>
                            <td>Quotas Toggle</td>
                            <td>When ON, you can define quota splits by percentage or fixed number.</td>
                        </tr>
                        <tr>
                            <td>Import NatRep Ranges</td>
                            <td>Automatically loads standard age brackets based on official national data.</td>
                        </tr>
                        <tr>
                            <td>Respondent Count</td>
                            <td>Shows how many users are available per range from the panel.</td>
                        </tr>
                        <tr>
                            <td>Quota Inputs</td>
                            <td>Set quotas per age range using % or #. These control your sample balance.</td>
                        </tr>
                        <tr>
                            <td>Add Age Range</td>
                            <td>Manually create a new custom age range if needed.</td>
                        </tr>
                        <tr>
                            <td>Quota Bar</td>
                            <td>Live summary of total percentages and counts — must reach 100%.</td>
                        </tr>
                        <tr>
                            <td>Save / Apply Changes</td>
                            <td>Confirms edits. “Apply” sets them live; “Save” stores them for later.</td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">Import NatRep Distribution (Age Quotas)</div>
                </h2>
                <p>The Import NatRep Distribution tool automatically assigns nationally representative percentages to each age range using verified population data (e.g., census, Eurostat). It ensures your survey results reflect the real demographic makeup of the country, without manual calculation.</p>

                <h2 class="heading heading-2 header-scroll" id="fields">
                    <div class="heading-text">Field Descriptions</div>
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
                            <td>Import NatRep Distribution</td>
                            <td>Loads official percentage splits per age range based on national population data.</td>
                        </tr>
                        <tr>
                            <td>Quota % and Fixed Count</td>
                            <td>Auto-filled percentages and their corresponding complete counts (e.g., 16.77% = 34 out of 200).</td>
                        </tr>
                        <tr>
                            <td>Total Summary Bar</td>
                            <td>Displays the total percentage (should be 100%) and total number of completes (e.g., 200), ensuring alignment with project goals.</td>
                        </tr>
                    </tbody>
                </table>

                <span style="display:block;">
                    <img src="images/NatRep2.png" alt="National Representativity Quotas"
                        class="screenshot-image"
                        onclick="expandImage(this)">
                </span>

                <h2 class="heading heading-2 header-scroll" id="how-to-enable">
                    <div class="heading-text">Suggest Age Distribution (Quotas)</div>
                </h2>
                <p>The Suggest Age Distribution function generates a balanced age quota setup using internal logic.</p>

                <h2 class="heading heading-2 header-scroll" id="fields">
                    <div class="heading-text">Field Descriptions</div>
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
                            <td>Suggest Age Distribution</td>
                            <td>System-generated split across age brackets based on internal balancing logic (not national data).</td>
                        </tr>
                        <tr>
                            <td>Quota % and Fixed Count</td>
                            <td>Auto-filled percentages and corresponding response counts for each age group.</td>
                        </tr>
                        <tr>
                            <td>Total Summary Bar</td>
                            <td>Live update showing total quota percent (would reach 100%) and total complete count for accuracy.</td>
                        </tr>
                        <tr>
                            <td>Save / Apply Changes</td>
                            <td>Confirms the applied suggested distribution and saves your updated audience configuration.</td>
                        </tr>
                    </tbody>
                </table>


                <h2 class="heading heading-2 header-scroll" id="how-it-behaves">
                    <div class="heading-text">How It Behaves</div>
                </h2>
                <ul class="space-y-2 modern-list">
                    <li>When National Representativity is activated, the system references verified demographic data for the selected country.</li>
                    <li>For Age, it imports population-based ranges and assigns proportions according to our official data.</li>
                    <li>For Gender, it sets the appropriate national ratio (e.g., 49% male, 51% female) or uses your predefined selections.</li>
                    <li>The Import NatRep Ranges button structures your quota grid, while Import NatRep Distribution automatically fills the correct proportional splits.</li>
                    <li>If exact data isn’t required, Suggest Age Distribution or Suggest Gender Balance provides an internally balanced setup to maintain coverage diversity.</li>
                    <li>You can fine-tune manually using Add Age Range / Gender Option, ensuring that niche demographics or experimental quotas are also supported.</li>
                    <li>Once saved, quota enforcement ensures real-time balancing — the system dynamically controls responses so that the final data matches national demographic targets.</li>
                    <li>This function maintains data accuracy, population validity, and survey reliability across both Age and Gender variables.</li>
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