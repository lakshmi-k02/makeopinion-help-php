<nav aria-label="Secondary navigation"
    class="rm-Sidebar hub-sidebar reference-redesign Nav3C5f8FcjkaHj rm-Sidebar_guides"
    id="hub-sidebar" role="navigation">
    <div class="Sidebar1t2G1ZJq-vU1 rm-Sidebar hub-sidebar-content">

        <div class="space-y-1">

            <div class="Sidebar1t2G1ZJq-vU1 rm-Sidebar hub-sidebar-content">
                <section class="Sidebar-listWrapper6Q9_yUrG906C rm-Sidebar-section">
                    <h2 class="Sidebar-headingTRQyOa2pk0gh rm-Sidebar-heading">MakeOpinion overview
                    </h2>
                    <ul class="Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">

                        <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                target="_self" href=""
                                aria-current="page"><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Dashboard</span></span><button
                                    aria-expanded="true"
                                    aria-label="Hide subpages for Getting started"
                                    class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i
                                        aria-hidden="true"
                                        class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                        style="font-size: 0.85em;"></i></button></a>
                            <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">


                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link"
                                        target="_self" href=""><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Live
                                                Projects</span></span></a></li>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link"
                                        target="_self" href=""><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Performance
                                                Metrics</span></span></a></li>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link"
                                        target="_self" href=""><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">System
                                                Notifications</span></span></a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section class="Sidebar-listWrapper6Q9_yUrG906C rm-Sidebar-section">
                    <h2 class="Sidebar-headingTRQyOa2pk0gh rm-Sidebar-heading">Audience Management
                    </h2>
                    <ul class="Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">
                        <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                target="_self" href=""><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Creating and
                                        Managing Audiences</span></span><button aria-expanded="true"
                                    aria-label="Hide subpages for Integration scenarios"
                                    class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i
                                        aria-hidden="true"
                                        class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                        style="font-size: 0.85em;"></i></button></a>
                            <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">

                                <?php
                                $pagename = "createaudience";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Create
                                                Audience</span></span></a></li>
                                <?php
                                $pagename = "editaudience";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] === $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Edit
                                                Audience Properties</span></span></a></li>

                                <?php
                                $pagename = "audiencedetailview";
                                ?>

                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>
                                        target=" _self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Audience
                                                Detail View</span></span></a></li>
                                <?php
                                $pagename = "navigatingaudiencelist";
                                ?>

                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Navigating
                                                the Audience List</span></span></a></li>
                            </ul>
                        </li>
                        <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                target="_self" href=""><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Audience
                                        Scheduling Features</span></span><button
                                    aria-expanded="true"
                                    aria-label="Hide subpages for Feasibility methods"
                                    class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i
                                        aria-hidden="true"
                                        class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                        style="font-size: 0.85em;"></i></button></a>
                            <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">

                                <?php
                                $pagename = "softlaunch";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3">
                                    <a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>">
                                        <span class="Sidebar-link-textLuTE1ySm4Kqn">
                                            <span class="Sidebar-link-text_label1gCT_uPnx7Gu">Soft Launch</span>
                                        </span>
                                    </a>
                                </li>
                                <?php
                                $pagename = "customdeadlines";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Custom
                                                Deadline</span></span></a></li>

                                <?php
                                $pagename = "scheduledaudience";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Schedule
                                                Audience</span></span></a></li>

                                <?php
                                $pagename = "completionscheduler";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Completion
                                                Scheduler</span></span></a></li>
                            </ul>
                        </li>
                        <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                target="_self" href=""><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Audience
                                        Targetting Tools</span></span><button aria-expanded="true"
                                    aria-label="Hide subpages for Feasibility methods"
                                    class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i
                                        aria-hidden="true"
                                        class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                        style="font-size: 0.85em;"></i></button></a>
                            <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">
                                <!-- conver this to sub menu with buttons -->
                                <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded"><a
                                        class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                        target="_self" href=""><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Screening Questions</span></span><button aria-expanded="true"
                                            aria-label="Hide subpages for Respondent experience"
                                            class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"
                                            type="button"><i aria-hidden="true"
                                                class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                                style="font-size: 0.85em;"></i></button></a>
                                    <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">

                                        <?php
                                        $pagename = "standardquestions";
                                        ?>
                                        <li class="Sidebar-item23D-2Kd61_k3"><a
                                                class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                                target="_self"
                                                href="?page=<?php echo $pagename; ?>"><span
                                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Standard Questions</span></span></a>
                                        </li>

                                        <?php
                                        $pagename = "customscreeningquestions";
                                        ?>
                                        <li class="Sidebar-item23D-2Kd61_k3"><a
                                                class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                                target="_self" href="?page=<?php echo $pagename; ?>"><span
                                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Custom Questions</span></span></a>
                                        </li>
                                    </ul>
                                </li>

                                <?php
                                $pagename = "audienceelimination";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Audience
                                                Eliminations</span></span></a></li>

                                <?php
                                $pagename = "audiencerecontacts";
                                ?>
                                <li class="Sidebar-item23D-2Kd61_k3"><a
                                        class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                        target="_self" href="?page=<?php echo $pagename; ?>"><span
                                            class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                                class="Sidebar-link-text_label1gCT_uPnx7Gu">Audience
                                                Recontacts</span></span></a></li>

                            </ul>
                        </li>
                    </ul>
                </section>
                <section class="Sidebar-listWrapper6Q9_yUrG906C rm-Sidebar-section">
                    <h2 class="Sidebar-headingTRQyOa2pk0gh rm-Sidebar-heading">Quotas</h2>
                    <ul class="Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">


                        <?php
                        $pagename = "nationalrepresentativequotas";
                        ?>
                        <li class="Sidebar-item23D-2Kd61_k3"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                target="_self" href="?page=<?php echo $pagename; ?>"><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">National Representative Quotas</span></span></a>
                        </li>

                        <?php
                        $pagename = "enablequotas";
                        ?>
                        <li class="Sidebar-item23D-2Kd61_k3"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                target="_self" href="?page=<?php echo $pagename; ?>"><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Enable Quotas</span></span></a>
                        </li>

                        <?php
                        $pagename = "enabledisablequotas";
                        ?>
                        <li class="Sidebar-item23D-2Kd61_k3"><a
                                class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] ==  $pagename) ? 'active' : ''; ?>"
                                target="_self" href="?page=<?php echo $pagename; ?>"><span
                                    class="Sidebar-link-textLuTE1ySm4Kqn"><span
                                        class="Sidebar-link-text_label1gCT_uPnx7Gu">Enable/Disable Quota Answers</span></span></a>
                        </li>

                    </ul>
                </section>
                <button aria-label="Hide sidebar navigation" class="Nav-toggle-collapse39KxgTH727KL"
                    type="button"></button>
</nav>