<?php
// A modern, professional under-construction page.
// Expects $page to be the requested page slug (e.g. "create-audience").
?>
<article class="rm-Article" id="content">
    <header id="content-head">
        <div class="row clearfix">
            <div class="col-xs-9">
                <h1>Under Construction</h1>
                <div class="excerpt">
                    <div class="rm-Markdown markdown-body" data-testid="RDMD">
                        <p>The documentation page for <strong><?php echo htmlspecialchars($page ?? 'this topic'); ?></strong> is coming soon.</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-3" style="text-align:right; padding-top:12px;">
                <span style="color:#6b7280; font-size:14px;">Status: Draft</span>
            </div>
        </div>
    </header>

    <div class="grid-container-fluid" id="content-container">
        <section class="content-body grid-100" style="
    padding-left: 10px;">
            <div class="rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD" style="max-width:920px; margin-left:31px;">

                <div style="display:flex; align-items:center; gap:24px; margin-top:18px;">
                    <div style="flex:0 0 120px; height:120px; background:#0070DF; border-radius:12px; display:flex; align-items:center; justify-content:center; color:white;">
                        <span style="font-size:70px;">🛠️</span>
                    </div>


                    <div>
                        <h2 style="margin:0 0 6px 0; font-size:22px;">We're working on it</h2>
                        <p>This section is being prepared by our documentation team. We'll publish the page for <strong><?php echo htmlspecialchars($page ?? 'this topic'); ?></strong> shortly.</p>
                    </div>
                </div>

                <div style="display:flex; gap:12px; margin-top:28px;">
                    <a href="/" class="btn btn-primary" style="padding:12px 20px; font-size:15px; border-radius:6px; background:#0070DF; color:white; text-decoration:none;">Return to Home</a>
                    <a href="/help-center" class="btn" style="padding:12px 20px; font-size:15px; border-radius:6px; background:#f3f4f6; color:#111827; text-decoration:none;">Explore other docs</a>
                </div>

                <hr style="margin:30px 0; border:none; border-top:1px solid #e6e6e6;" />

                <h3 style="font-size:16px; margin-bottom:10px;">What you can do</h3>
                <ul>
                    <li>Check back later — the page will appear here when it's ready.</li>
                    <li>Use the navigation to find related topics.</li>
                    <li>If this content is critical, contact <a href="mailto:support@example.com">support</a> to request priority.</li>
                </ul>

            </div>
        </section>
    </div>
</article>