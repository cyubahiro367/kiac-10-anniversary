<template>
  <section id="schedule-section" class="schedule-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-5">Schedule</h3>

      <!-- Nav tabs -->
      <ul class="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
        <li class="nav-item me-2">
          <a
            class="nav-link active"
            id="tab-1"
            data-bs-toggle="tab"
            href="#tab-1-content"
            role="tab"
            aria-controls="tab-1-content"
            aria-selected="true"
          >
            <span class="heading">Arrival on international delegates</span>
            <span class="meta">Wednesday 28th September 2022</span>
          </a>
        </li>
        <li class="nav-item me-2">
          <a
            class="nav-link"
            id="tab-2"
            data-bs-toggle="tab"
            href="#tab-2-content"
            role="tab"
            aria-controls="tab-2-content"
            aria-selected="false"
          >
            <span class="heading">Day 1</span>
            <span class="meta">Thursday 29th September 2022</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="tab-3"
            data-bs-toggle="tab"
            href="#tab-3-content"
            role="tab"
            aria-controls="tab-3-content"
            aria-selected="false"
          >
            <span class="heading">DAY 2</span>
            <span class="meta">Friday 30th September 2022</span>
          </a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="schedule-tab-content tab-content">
        <div
          class="tab-pane active"
          id="tab-1-content"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15.00 - 20.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Registration</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">18.30 - 20.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Welcome & Networking Reception</h3>
              <div>
                <i class="fas fa-chevron-right me-2" style="color: #00008b"></i
                >Welcome Speech.
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane no-timeline"
          id="tab-2-content"
          role="tabpanel"
          aria-labelledby="tab-2"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">8.00 - 9.00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Registration</h3>
            </div>
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9.00 - 10.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Opening Ceremony</h3>
              <div>
                <i class="fas fa-chevron-right me-2" style="color: #00008b"></i
                >Introductory & Welcome speeches
              </div>
              <div>
                <i class="fas fa-chevron-right me-2" style="color: #00008b"></i
                >Keynote addresses speech
              </div>
              <div>
                <i class="fas fa-chevron-right me-2" style="color: #00008b"></i
                >Guest of Honor’s Opening address
              </div>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">10.00 – 10.20</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Coffee Break</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">10.20 - 11.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">The Past, Present and Future of KIAC.</h3>
              <div class="desc">
                KIAC was launched in 2012, as one of the leading Arbitral
                institution with currently more than 200 arbitration cases out
                of which 40% are international cases. This panel will discuss
                how KIAC influence the practice of international commercial
                arbitration, the 1958 New York Convention, the role of Rwandan
                Courts and the lessons learnt from the past which may guide the
                future perspectives.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">11.30 - 12.00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">12.00 - 12.40</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                Disclosure in International Arbitration: Current Trends
              </h3>
              <div class="desc">
                This panel will address the past and current practice of
                arbitral institutions with respect to arbitrator(s) and
                prospective arbitrator(s)’ disclosure. The panel will assess
                (using court decisions) whether there is current consequences
                caused by failure to make such disclosures leading to propose
                some modification of the existing Arbitral institution’s
                practices.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">12.40 - 13.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">13.00 - 14.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Lunch</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta"></div>
            <div class="content">
              <h3 class="title mb-3">BREAK OUT SESSION ONE</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14.00-14.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                The Revised 2020 IBA Rules of Evidence in international
                arbitration and its Commentary.
              </h3>
              <div class="desc">
                In December 2020, the International Bar Association (“IBA”)
                adopted a revised third edition of its Rules on the Taking of
                Evidence in International Arbitration (the “2020 IBA Rules”),
                which supersede the 2010 version currently in force (the “2010
                IBA Rules”). Unless otherwise agreed, the 2020 IBA Rules will
                apply to all arbitrations in which the parties agree to apply
                the IBA Rules after 17 December 2020. This panel will discuss
                the aim, the scope of the revised rules as well as the key
                changes to inform the arbitration practitioners.
              </div>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14.30 - 14.50</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta"></div>
            <div class="content">
              <h3 class="title mb-3">BREAK OUT SESSION TWO</h3>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">14.00-14.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                The Dispute Resolution options under Africa Continental Free
                Trade Agreement (AFCTA)
              </h3>
              <div class="desc">
                This panel composed of trade experts and arbitrator will discuss
                the different steps (options) under the AFCTA Agreement and
                Protocol in relation to the dispute resolution mechanisms with
                much focus on the rights and obligations of State Parties under
                AfCFTA Agreement, the place of arbitration under the mechanism
                and what Arbitration practicitioners need to anticipate.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14.30 - 14.50</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15.00 - 15.40</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">BREAK OUT SESSIONS (SECOND ROUND)</h3>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta"></div>
            <div class="content">
              <h3 class="title mb-3">BREAK OUT SESSION ONE</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15.00 - 15.40</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">
                The virtual hearing Protocols: What Practitioners need to know.
              </h3>
              <div class="desc">
                Virtual hearing was popular during COVID 19 time. The different
                protocols establishing guidelines for arbitrators, parties and
                counsel to consider when preparing for and attending a virtual
                hearing, this panel will discuss the learning of the use of
                virtual hearing, its limitation and whether practitioners can
                anticipate ‘the status quo’ in the post COVID 19.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15:40 - 16.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16.00 – 16.20</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Health Break</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta"></div>
            <div class="content">
              <h3 class="title mb-3">BREAK OUT SESSION TWO:</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15.00 - 15.40</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">
                Joinder and Multiparty Arbitration: Comparative perspectives
              </h3>
              <div class="desc">
                This panel will address issues such as who are the proper
                parties to arbitration, consent to arbitrate; joinder of parties
                and consolidation of arbitral proceedings; arbitral procedures
                where multiple parties are involved. A Mock case on multiparty
                or multi contract Arbitration will follow aiming to meet the
                practical needs of practitioners. The legal counsel will plead a
                situation of jurisdictional issues in multiparty case under
                institutional arbitration rules
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15:40 - 16.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16.00 – 16.20</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Day one wrap up</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16.20 – 16.40</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Health Break & end of the day</h3>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">19.00 – 22.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Gala dinner</h3>
            </div>
          </div>
        </div>
        <div
          class="tab-pane no-timeline"
          id="tab-3-content"
          role="tabpanel"
          aria-labelledby="tab-3"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">8.30 - 9.00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Registration</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9.00 - 9.40</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                The 2022 revised ICSID Rules and Regulations ICSID has Releases
                2022 Version of its Rules and Regulations.
              </h3>
              <div class="desc">
                This panel will discuss the aim, the scope of the revised rules
                and regulations as well as the key changes to inform the
                investment arbitration
              </div>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">9.40 - 10.00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">10.00 - 10.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                The Battle of the Titans- Enforcing an arbitral award set aside
                at the seat (YES Or NO)
              </h3>
              <div class="desc">
                There is contrasting positions taken by a number of
                pro-arbitration jurisdictions in relation to the enforcement of
                awards that have been set aside by the courts of the seat.
                Scholars and practitioners are divided. The session will discuss
                the two contrasting positions.
              </div>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">10.30 - 10.45</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">10.45 – 11.00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Health Break</h3>
            </div>
            <!--//content-->
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">11.00 – 11.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">
                Presenting damages in construction arbitration
              </h3>
              <div class="desc">
                The panel composed of arbitrators and Quantum experts will share
                the technical issues from theory to practice of the arbitral
                process such as legal standards, approaches in their evaluation
                and calculation of damages in construction disputes.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">11.30 - 11.45</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">11.45 - 12.15</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Valuing energy in arbitration disputes</h3>
              <div class="desc">
                The price of energy keeps changing and can both give rise to
                disputes and determine damages. This panel will tackle pricing
                and valuation issues that arise in international commercial
                arbitration disputes including: recent developments and current
                trends in gas price reviews; price how fluctuations in oil
                prices can impact damages.
              </div>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">12.15 - 12.30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Discussion</h3>
            </div>
            <!--//content-->
          </div>
          <!--//item-->
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">12.30 – 12.40</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Conclusion</h3>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">12.40 – 14.00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Lunch</h3>
              <div>
                <i class="fas fa-chevron-right me-2" style="color: #00008b"></i
                >End of the Conference
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>