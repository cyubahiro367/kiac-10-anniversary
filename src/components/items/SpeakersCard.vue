<template>
  <div class="col-6 col-lg-3 mb-4">
    <div class="card rounded-0">
      <a
        href="#modal-speaker-1"
        data-bs-toggle="modal"
        :data-bs-target="dataTarget"
        ><img :src="image" class="card-img-top rounded-0" alt=""
      /></a>
      <div class="card-body">
        <h5 class="card-title mb-2">{{ name }}</h5>
        <div class="card-text mb-3">
          <div class="meta">{{ role }}</div>
          <div class="meta">{{ location }}</div>
        </div>
      </div>
      <!--//card-->
    </div>
    <!--//card-->

    <!-- Modal Speaker -->
    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Dr Faustin Ntezilyayo
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr Faustin Ntezilyayo</h2>
                  <div class="meta">Chief Justice</div>
                  <div class="meta mb-2">Supreme Court of Rwanda</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Dr. Faustin Ntezilyayo has served in various positions within
                the Government of Rwanda including as Minister of Justice, Vice
                Governor of the National Bank of Rwanda, Managing Director of
                the Rwanda Utilities Regulatory Agency. He has been a Consultant
                with the World Bank, the United Nations Institute for Training
                and Research (UNITAR) and the Organisation Internationale de la
                Francophonie (OIF), among others. He also has taught in various
                universities in Rwanda, the United States of America and Canada.
              </p>
              <p class="mb-0">
                Prior to his appointment as Chief Justice, Dr. Ntezilyayo was
                Judge of the East African Court of Justice. He is a Fellow of
                the Chartered Institute of Arbitrators (FCIarb - London); a
                member of the African Arbitration Association (AfAA), and
                a.former member of the Panel of Conciliators of the World Bank’s
                International Centre for Settlement of Investment Disputes
                (ICSID).
              </p>
              <p>
                Chief Justice Faustin Ntezilyayo holds a PhD in law from Antwerp
                University (1994, Belgium), a Master’s in Taxation Law from Free
                University of Brussels (1996, Belgium), a Master of Arts in
                international affairs with specialization in international trade
                policy from Carleton University (2009, Canada), and a Bachelor
                of Law from the National University of Rwanda (1986).
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-15"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              NAKASAMBA BANDA-CHANDA
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/15.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">NAKASAMBA BANDA-CHANDA</h2>
                  <div class="meta">Partner, A.M. Wood & Co.</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Nakasamba is a transactional and complex dispute resolution
                lawyer, practicing in one of the top-tier law firms ( A.M.W &
                Co. Legal ) in Zambia. Nakasamba’s whose practice areas include
                finance and financial law corporate, commercial and investment
                law, mergers and acquisitions, and anti-trust laws.
              </p>
              <p class="mb-0">
                Nakasamba is a Fellow of Chartered Institute of Arbitrators, and
                an active member of both in London and Zambian branch currently
                serving as Honorary Secretary of the latter. She is an
                accredited Arbitrator, Adjudicator and Mediator.
              </p>
              <p>
                In her various roles, she has been involved in the drafting of
                legal instruments, and is currently a part of a 6-member
                committee of the CIArb Zambian Branch, engaged in the review and
                re-enactment of the Arbitration Act No. 19 of 2000 in
                collaboration with the Zambia Law Development Commission, to
                adapt the Model Law on International Commercial Arbitration
                adopted by the United Nations Commission on International Trade
                Law as amended in 2006.
              </p>
              <p>
                She is committed to promoting ADR, ensuring professional
                credibility and diversity within the AADR community.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-18"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Julien Kavaruganda
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/18.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Julien Kavaruganda</h2>
                  <div class="meta">Senior Partner, KS & P</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Julien Kavaruganda is the Founder & Senior Partner of
                K-Solutions & Partners a corporate law firm in Kigali. He has
                been practicing at the Brussels Bar Association before joining
                the Rwanda Bar Association.
              </p>
              <p class="mb-0">
                Julien is the Immediate Past President of the Rwanda Bar
                Association, Immediate Past Board Council Member of the East
                African Law Society and Former Board member of Bank of Kigali.
              </p>
              <p>
                He is the current Vice Chairman of the Kigali International
                Arbitration Centre, Board member of MTN Rwanda Ltd
                (Telecommunication), Board member of Rwanda Finance Ltd-Kigali
                International Finance Centre) and Board member of the
                Commonwealth Lawyers Association.
              </p>
              <p>
                Julien has over eighteen years of experience. His practice
                covers corporate and commercial law inclusive of mergers and
                acquisitions, joint ventures, privatization, banking and
                finance, project finance, capital markets, arbitration, energy
                and natural resources, and infrastructure law.
              </p>
              <p>
                Julien is also actively involved in several environmental and
                ecological issues in the local community.
              </p>
              <p>
                Julien Kavaruganda remains ranked in Band 1 since 2012 till
                today by Chambers and Partners.
              </p>
              <p>
                He is considered as a market's most highly regarded figure. He
                advises his clients on the full complement of business law
                concerns, including corporate structuring and transactions, as
                well as finance, real estate, construction, and energy-related
                matters.
              </p>
              <p>
                He has experience advising on arbitration proceedings, in
                addition to his non-contentious work advising international
                investors, international organization and Embassies.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Professor Dr. Mohamed Abdel Wahab, C.Arb, FCIArb
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a1.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">
                    Professor Dr. Mohamed Abdel Wahab, C.Arb, FCIArb
                  </h2>
                  <div class="meta">Keynote Speaker</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Professor of International Arbitration, Private International
                Law and English Contract Law at Cairo University; Founding
                Partner and Head of International Arbitration, Construction and
                Energy Groups at Zulficar&Partners Law Firm (Egypt); ICCA
                Treasurer & Member of the Governing Board; Dean of the
                Africa Arbitration Academy; Chair of the International Expert
                Committee of the Permanent Forum for China Construction Law;
                Vice-Chair of the ICC Governing Body for Dispute Resolution
                Services; Co-Chair, IBA Arab Regional Forum; Vice-Chair of the
                Advisory Committee of the CRCICA; Member of the CIMAC Court of
                Arbitration; Member of the Advisory Board of the MIAC; Member of
                the LACIAC Court of Arbitration; Member of the Board of Trustees
                of the CIArb; Member of the ITA Academic Council; Member of the
                Advisory Board, Indonesian Arbitration Centre; and Member of the
                Court, PCA;. He served as ‘Arbitrator’, ‘Legal Expert’ and
                ‘Counsel’ in more than 245 cases, involving parties from the
                Africa, Asia, Canada, Europe, the Middle East and the United
                States. He received the LAW Magazine 2017 Best Legal
                Practitioner Award, the 2018 ASA International Arbitration
                Advocacy Prize, the 2019 AYA Hall-of-Fame African Arbitrator
                Award, the 2020 Client Choice International Award. He is listed
                in Who’s Who Global Elite Thought Leaders: International
                Arbitration (2021 and 2022); selected among the 500 honorees of
                the 2021 Lawdragon Global Litigation 500 Lawyers
                Guide, the Legal500 Africa Powerlist (2021) and the AYA’s
                Africa’s Top 30 Powerlist (2021). He is​ regularly ranked
                and recognised as a leading international arbitration thought
                leader and arbitrator. Who’s Who Legal: Arbitration (2022) says:
                “his intellectual rigour and well-rounded experience make him a
                natural choice as an arbitrator”, “he is academically
                brilliant”, and “one of the best minds on arbitration issues”.
                 Who’s Who Legal: Arbitration (2021) says: “Mohamed Abdel Wahab
                is at the top of the market”, “a top
                tier thought leader and in a league of his own”. Chambers &
                Partners Global (2021) says, “Peers regard Mohamed Abdel
                Wahab as “an absolute star in arbitration”. The Legal 500
                (2019) states Mohamed Abdel Wahab is ‘one of the best in
                the world’. In 2021, he was shortlisted among the top five
                arbitrators for the GAR award for the best prepared and
                responsive arbitrator. He is widely published on many aspects of
                international arbitration. Most notably, he is the co-editor of
                the leading treatise entitled ‘Online Dispute Resolution: Theory
                and Practice’ (2012 & 2021); co-editor of the first treatise
                dealing with the impact of COVID-19 on international arbitration
                and entitled ‘International Arbitration and the COVID-19
                Revolution’ (2020). 
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-6"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Tunde Ogunseitan FCIArb Arbitrator, Mediator and Counsel
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/speaker-5.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">
                    Tunde Ogunseitan FCIArb Arbitrator, Mediator and Counsel
                  </h2>
                  <div class="meta">International Arbitrator</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Tunde Ogunseitan is a dually qualified dispute resolution
                practitioner (UK and Nigeria) with practical multidisciplinary
                experience gained in both jurisdictions. Tunde Ogunseitan is a
                dually qualified dispute resolution practitioner (UK and
                Nigeria) with practical multidisciplinary experience gained in
                both jurisdictions.
              </p>
              <p>
                He has extensive dispute resolution experience in private
                international law, foreign investment, and commercial contract
                cases. The matters Tunde has worked on cover the full economic
                spectrum, from relatively straightforward sale of goods disputes
                to complex cases concerning state contracts for the development
                of significant infrastructure projects.
              </p>
              <p>
                He formerly has led the Common Law jurisdictions as Counsel of
                the International Chamber of Commerce (ICC) including the United
                Kingdom, Ireland, the Caribbean, Anglophone Africa, and the
                Indian Subcontinent for over 7 years. Prior to his time at the
                ICC, he gained substantial experience from practice in several
                international law firms including Steptoe and Johnson,
                Cadwalader and in-house from Zurich Financial, specialising in
                dispute resolution, asset tracing, maritime law, insurance,
                structured finance and debt capital markets.
              </p>
              <p>
                Tunde regularly consults internationally for a variety of
                arbitral institutions, businesses and firms. He has shared his
                expertise through presentations and publications on diverse
                issues in dispute resolution, including arbitral procedure,
                private international law and international contracts.
              </p>
              <p>
                He is also a teaching fellow in alternative dispute resolution
                and international commercial arbitration at various institutions
                in England and France. He is currently a trustee of ODRAfrica.
                Tunde is admitted as a Fellow of the Chartered Institute of
                Arbitrators and a member of its Professional Development
                Advisory Group and teaching faculty. He was a founding member of
                the IBA 40 under 40. He is also a court member of the Lagos
                Court of Arbitration (LCA) and currently chairs the LCA Sub
                Committee on reviewing the LCA Rules.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Tunde Ogunseitan FCIArb Arbitrator, Mediator and Counsel
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/speaker-2.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Prof. Emilia Onyema</h2>
                  <div class="meta">SOAS-University of London</div>
                  <ul class="social-list list-inline mb-0">
                    <li class="list-inline-item">
                      <a href="#"><i class="fa fa-envelope fa-fw"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">eo3@soas.ac.uk</a>
                    </li>
                  </ul>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Emilia Onyema is a Professor of International Commercial Law at
                SOAS University of London where she teaches international
                commercial arbitration, international investment law and
                commercial law in a global context. She is qualified to practice
                law in Nigeria, as a Solicitor in England & Wales, Fellow of
                Chartered Institute of Arbitrators and independent arbitrator.
                She is a member of the Cairo Regional CICA Advisory Committee,
                LACIAC Court member, among others. She convenes the SOAS
                Arbitration in Africa conference series and leads the SOAS
                Arbitration in Africa biennial survey research project; she
                co-authored the African Promise and founded the Arbitration Fund
                for African Students (AFAS) a registered charitable organisation
                in England. Her research interests focus on the development of
                international arbitration in Africa and the engagement of
                Africans in international arbitration. She publishes widely in
                her areas of expertise. She has experience as presiding, co and
                sole arbitrator, and acts as legal expert witness in
                international arbitration.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-27"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Prof. Emilia Onyema
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/Isaiah Bozimo.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Prof. Emilia Onyema</h2>
                  <div class="meta">
                    Attorney-General and Commissioner for Justice, Delta State
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Isaiah Bozimo is the Attorney-General and Commissioner for
                Justice, Delta State. As the State’s Chief Legal Officer, he
                leads a team of 218 State Counsel, who work across five zones.
                Under his leadership, the Ministry of Justice is dedicated to
                enhancing efficiencies in the administration of justice.
              </p>
              <p>
                Immediately preceding his appointment as Attorney-General,
                Isaiah was a Partner at Broderick Bozimo & Company, a practice
                specialising in arbitration and litigation. His reputation for
                delivering high-value settlements and victories has earned him
                recognition by Who’s Who Legal as a Future Leader in
                Arbitration.
              </p>
              <p>
                Isaiah has represented state-owned entities, corporations, and
                high-net-worth individuals in both arbitration and litigation.
                He has also served as Sole Arbitrator and Co-Arbitrator under
                the rules of the International Chamber of Commerce (ICC), the
                Lagos Court of Arbitration (LCA), the Lagos State Multi-Door
                Courthouse (LMDC) and the United Nations Commission on
                International Trade Law (UNCITRAL).
              </p>
              <p>
                He serves on the Council of the Nigerian Bar Association Section
                on Business Law and the Arbitration and Dispute Resolution
                Thematic Area of the National Assembly Business Environment
                Roundtable (NASSBER). In addition, he has contributed to
                international publications, books, and guides in the field of
                International Commercial Arbitration, such as the 40 Under 40
                International Arbitration (2021), Rethinking the Role of African
                National Courts in Arbitration (2018), the Delos Guide to
                Arbitration Places, and the New York Convention Guide.
              </p>
              <p>
                Isaiah is an alumnus of Queen Mary, University of London, the
                London School of Economics, and the University of Central
                Lancashire.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Thomas Kendra
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/speaker-4.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Thomas Kendra</h2>
                  <div class="meta">Partner, Hogan Lovells</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                “Thomas is a partner in Hogan Lovells’ international arbitration
                team in Paris. He is dual-qualified in England and France and
                represents clients in both commercial and investor-state
                arbitration in a range of sectors, notably major telecoms, life
                sciences, mining and energy enterprises, as well as numerous
                States such as Mongolia and Venezuela.
              </p>
              <p>
                Thomas is passionate about encouraging the growth of alternative
                dispute resolution in Africa. He collaborated in establishing
                the Kigali International Arbitration Centre (KIAC), for which he
                was shortlisted for Solicitor of the Year by the Law Society,
                and he continues to sit as a board member. Thomas also leads
                Hogan Lovells' Paris-Afrique Group, a cross-practice desk
                established within the Paris office, and he has recently been
                elected co-president of AfricArb, a non-profit organisation of
                practitioners aiming to promote the development of arbitration
                in Africa. Jeune Afrique Business Plus recently ranked Thomas
                28th on its 2021 power list of most influential lawyers in
                francophone Africa.
              </p>
              <p>
                As well as working on international arbitrations, Thomas teaches
                courses on arbitration at the Versailles university and Sciences
                Po Paris, and his recent publications include: ‘A Timely
                Reference Guide to OHADA Arbitration’, (ICC Dispute Resolution
                Bulletin 2021, Issue 2 (June 2021)) and ‘Collaboration AFCFTA
                and OHADA: a potential solution to the resolution of disputes
                relating to Panafrican disputes’ (Revue Lamy Droit des Affaires,
                N°160, June 2020).”
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-16"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Ms. Olusola Adegbonmire
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/17.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Ms. Olusola Adegbonmire</h2>
                  <div class="meta">
                    Senior Managing Partner, Sola Ajijola & Co
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Mrs. Olusola Adegbonmire, C.Arb is a Legal Practitioner and
                Partner in the Law Firm of Sola Ajijola and Co. where she has
                practiced law for the past 34 years. 
              </p>
              <p>
                She obtained her Bachelors Degree in Law (LL.B) from the
                University of Ife, Ile Ife, Osun State of Nigeria in 1984, and a
                Masters Degree in Law (LL.M) from the University of Lagos in
                1987. Olusola was called to the Nigerian Bar in 1985.
              </p>
              <p>
                In her law practice she has been involved in negotiations,
                mediations and various ADR processes with emphasis on
                Arbitration and Mediation. Mrs. Adegbonmire is a Chartered
                Arbitrator of the Chartered Institute of Arbitrators Nigeria
                Branch, and is an Approved Tutor and Assessor of the Institute. 
              </p>
              <p>
                She is currently the 1st Vice Chairman, of the Nigerian Branch
                of CIARB. 
              </p>
              <p>
                Mrs. Sola Adegbonmire serves on the board of the Kigali
                International Arbitration Centre, Rwanda.
              </p>
              <p>
                Mrs. Adegbonmire is an Accredited Mediator of the Centre for
                Effective Resolution (CEDR), and a member of the Panel of
                Neutrals of the Lagos Multidoor Court House, where she
                arbitrates and mediates extensively.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-8"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Victor Mugabe
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/speaker-7.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Victor Mugabe</h2>
                  <div class="meta">Secretary General, KIAC</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Victor MUGABE joined the Rwanda Bar Association in 2012 as the
                Institutional Executive Director. Prior to that period Victor
                worked for the Ministry of Justice as the Assistant Coordinator
                (2007-2010) and the acting Coordinator of the Justice Sector
                Secretariat (2010-2012)
              </p>
              <p>
                He has significantly contributed to the continued development of
                strategic transformation of the Rwanda’s Justice Sector which
                started in 2003.
              </p>
              <p>
                During his stay at the Rwanda Bar Association for a period that
                exceeds eight years, he immensely contributed to the
                institutional growing dynamism through the development and
                implementation of strategic programs intended to position the
                legal practice at internationally accepted standards of the
                legal profession.
              </p>
              <p>
                Victor is a lawyer with rich and long experience in legal and
                justice related projects management.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-48"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Alexandre Vagenheim
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a2.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Alexandre Vagenheim</h2>
                  <div class="meta">
                    Head of Impact & Global Relations-JUS MUNDI
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Alexandre Vagenheim is Head of Impact & Global Relations at Jus
                Mundi. His focus is on extending Jus Mundi’s institutional
                relations and Jus Mundi’s database to all areas of international
                law. Alexandre is a French qualified international arbitration
                and environmental lawyer. He regularly advises and participates
                in NGO's environment litigations and has been assisting
                companies in various aspects of their Environment and Social
                Governance. Prior to joining Jus Mundi, Alexandre has
                represented clients in a wide range of matters involving
                international commercial arbitration, international investment
                disputes and French court litigation at the former arbitration
                practice of Castaldi Mourre & Partners in Paris. In addition to
                his experience as counsel, Alexandre has also acted as secretary
                to arbitral tribunals in international arbitrations during his
                time as research assistant to the late Prof. Martin Hunter at
                Essex Court Chambers, London. Alexandre was appointed lecturer
                in international commercial arbitration and investment
                arbitration and private international law within the LL M
                program of King's College and at the University of Paris 1
                Panthéon-Sorbonne.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-31"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Dr. Randi Ayman
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a4.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Randi Ayman</h2>
                  <div class="meta">
                    Senior Research Fellow Max Planck Institute Luxembourg
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Aïssatou is Legal Counsel at the International Centre for
                Settlement of Investment Disputes (ICSID), which she joined in
                2008.
              </p>
              <p>
                Before joining the Institute, Randi was Legal Counsel for nearly
                seven years at the International Centre for Settlement of
                Investment Disputes (ICSID), in Washington DC. Prior to that,
                Randi worked at the international arbitration practice of the
                law firms Shearman & Sterling LLP and Eversheds LLP, both in
                Paris, at Le Défenseur des droits in Paris, and at the United
                Nations World Tourism Organization in Madrid.  
              </p>
              <p>
                Ms. Diop holds a B.A. in History and Political Science from
                Jamestown University, an M.A. in African Studies and Political
                Science from Yale University, and a J.D. with a concentration on
                international law from Northwestern University.  She is admitted
                to practice (inactive) in the State of Illinois and the District
                of Columbia.
              </p>
              <p>
                Randi specializes in investor-State dispute settlement, public
                international law, treaty law, and State-to-State dispute
                resolution. She earned her Ph.D., with highest distinction, from
                the University of Paris I Panthéon-Sorbonne for a thesis on the
                denunciation and renegotiation of treaties. Dual-qualified in
                Egypt and France, she holds Masters degrees in international
                law, a Maîtrise in international business law and Licence en
                Droit, from Paris I Panthéon-Sorbonne as well as an LL.B. from
                Cairo University.
              </p>
              <p>
                Randi serves as independent tribunal secretary in investor-State
                proceedings and provides consultancy in investment policies and
                dispute resolution. She has also acted as arbitrator in several
                arbitrations under the Arbitration Act 1996 (UK).
              </p>
              <p>
                She has prepared and delivered numerous capacity-building
                trainings on investment law and procedure to government
                officials, practitioners, and students. She also teaches a
                course on international investment dispute resolution at the
                University of Paris II Panthéon-Assas.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-11"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Dr. Ismail Selim
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a5.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Ismail Selim</h2>
                  <div class="meta">Director of CRCICA</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Dr. Ismail Selim is the Director of the CRCICA and Vice
                President of CIArb Egypt Branch. He graduated from Cairo
                University in 1997 with an LL.B., where he also obtained an LL.M
                in International Business Law from the I.D.A.I in 1999. He then
                earned his Master’s degree in Public Administration from the
                E.N.A, in Paris in 2001. He also earned a Certificate in
                International Commercial Arbitration from Queen Mary University
                of London in 2005. In 2007, he accomplished an internship
                program at the ICC Court of International Arbitration. In 2009,
              </p>
              <p>Dr. Selim earned his PhD from Burgundy University (France).</p>
              <p>
                Dr. Selim earned his PhD from Burgundy University (France). 
              </p>
              <p>
                Dr. Selim started off his carrier at the judiciary, until he
                joined Zulficar & Partners in 2009 where he was promoted to
                Partner in 2013. Further, in May 2015,
              </p>
              <p>
                Dr. Selim joined Nour and Selim in association with Al Tamimi
                and Company as Partner and Head of Dispute Resolution.
              </p>
              <p>
                Dr. Selim teaches International Arbitration at IDAI and BUE. He
                has been constantly appointed as Presiding arbitrator, Sole
                Arbitrator and Co-Arbitrator and has acted as a Counsel in
                various ad hoc and institutional cases under various rules such
                as Swiss Rules, UNCITRAL, the ICC, the DIFC-LCIA, ADCCAC, BCDR
                and CAS. Dr. Selim provides Expert opinions on Egyptian and
                Libyan Laws in International Proceedings. Dr. Selim was
                recognized as “Leading Individual” by Legal 500 and has
                published several articles in learned Egyptian and International
                journals and regularly speaks in international conferences in
                the field of arbitration and investment.
              </p>
              <p>
                Dr. Selim is fluent in Arabic, French, English and speaks basic
                Chinese.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-45"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Dr. Kenneth Wyne Mutuma
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a6.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Kenneth Wyne Mutuma</h2>
                  <div class="meta">C. Arb (international Arbitrator)</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Dr Kenneth Wyne Mutuma is a chartered arbitrator of the
                Chartered Institute of Arbitrators (London), a certified public
                secretary, an accredited mediator/advocate of the High Court of
                Kenya, and an active member of the several professional
                associations including the Law Society, Architectural
                Association, Institute of Certified Secretaries, Association of
                Professional Societies in East Africa etc. He also sits in a
                number of committees and boards of various professional and
                corporate organizations in and out of Kenya including the
                Governing Council of the Institute of Certified Secretaries and
                the Chartered Institute of Arbitrators, as well as committees of
                the Association of Professional Societies for East Africa, the
                National Committee on International Humanitarian Law, Africa
                Unite (Cape Town) etc. More specifically, he's contribution on
                the subject of governance is based upon he's experiences with
                the South Africa Institute of Management where he oversaw the
                legal compliance and governance unit during the consultations
                that preceded the adoption of the King III code. In addition,
                he's work with the Nelson Mandela Foundation has been
                instrumental in understanding critical elements of community
                empowerment, conflict resolution, ethical leadership and
                stakeholder management in the corporate and non-profit sectors.
                Ken is also a senior lecturer with the University of Nairobi's
                School of Law. He teaches and supervises both postgraduate and
                undergraduate studies in the areas of corporate governance,
                international law, refugee law, international human rights, and
                alternative dispute resolution mechanism. Further, he holds
                several academic qualifications including undergraduate studies
                in law and architecture, a master’s in international law and a
                PhD in Law focusing on the challenges of outsourcing public
                functions to the private sector. He is widely published in in
                the areas he teaches and serves as part of the editorial team of
                a number of journals including the UON Law Journal and the ICS
                Journal on Corporate Governance. Ken also is engaged in legal
                practice both in Cape Town and Nairobi.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-14"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Ms. Aissatou Diop
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a3.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Ms. Aissatou Diop</h2>
                  <div class="meta">Legal Counsel-ICSID</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Randi Ayman is a Senior Research Fellow in the Department of
                International Law and Dispute Resolution of Max Planck Institute
                in Luxembourg.
              </p>
              <p>
                At ICSID, Ms. Diop has served as Secretary of the Tribunal and
                Secretary of ad hoc the Committee in over 50 investor-state
                disputes that involve countries mostly in Africa, Eastern Europe
                and the Middle East, relate to a variety of economic sectors,
                and are brought under the ICSID Convention and Arbitration
                Rules, the ICSID Arbitration (Additional Facility) Rules, and
                the UNCITRAL Arbitration Rules. Ms. Diop has published articles
                on international investment arbitration and spoken on the topic
                at a number of international conferences.  Prior to joining
                ICSID, Ms. Diop was an Associate at a law firm in Washington,
                D.C., where she worked in the international trade and investment
                arbitration group. 
              </p>
              <p>
                Ms. Diop holds a B.A. in History and Political Science from
                Jamestown University, an M.A. in African Studies and Political
                Science from Yale University, and a J.D. with a concentration on
                international law from Northwestern University.  She is admitted
                to practice (inactive) in the State of Illinois and the District
                of Columbia.
              </p>
              <p>Ms. Diop is fluent in Wolof, French, and English.</p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-40"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. John Bosco Bugingo
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a7.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. John Bosco Bugingo</h2>
                  <div class="meta">Managing Partner-Fountain Advocates</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Mr. John Bosco BUGINGO is a practicing attorney and the Managing
                Partner at Fountain Advocates, he is also serves as a founder
                and Director at Rwanda Bridges to Justice, a non-profit
                organization focusing on access to justice in Rwanda .
              </p>
              <p>
                He was a Founding partner and Head of Business Development and
                client relations at the Fountain Law Chambers before it was
                dissolved to form Fountain Advocates in 2013. He holds a
                Master’s Degree (LL. M) Business Law from University of Rwanda
                (2010-2011), Bachelor’s Degree (LL. B/Hons) from the National
                University of Rwanda (2004), Post graduate Diploma in Legal
                practice (DLP) from the Institute for Legal Practice and
                Development (ILPD) 2014; 
              </p>
              <p>
                A practitioner, business law analyst and contract law expert,
                John Bosco carries over 16 years of legal practice experience in
                corporate practice and commercial litigation.
              </p>
              <p>
                He serves as a member of the Board of Directors of several
                Global and Local entities in the Hospitality, tourism,
                education, construction, private security, Human resource and
                Health sectors, he notably serves as a member of the Institution
                Review Board (IRB) at an American owned medical
                school-University of Global Health Equity (UGHE), where he is a
                non-scientific professional member on the Board in charge of
                ethics.
              </p>
              <p>
                He is a regular trainer, facilitator at professionals workshop
                trainings, moderator, panelist at roundtable discussion series
                with the judicial stakeholders and partners.
              </p>
              <p>
                He is a corporate lawyers with particular interest in contract
                law, arbitration, commercial litigation, tax, banking & Finance.
                He spares time to serve in social projects and therefore is
                involved as a director charged with advocacy, research and
                pro-bono work for vulnerable members of Rwanda community by
                engaging in capacity building trainings, mentoring for young
                lawyers, legal, rights awareness in communities, moderations and
                panel participation at round table meetings with justice sector
                players (prosecutors, investigators, lawyers and CSO’s).
              </p>
              <p>
                John Bosco is a member of the Rwandan Bar Association (RBA), the
                East African Law Society (EALS), as well as other significant
                professional organizations.
              </p>
              <p style="text-align: center">Confidential and Proprietary</p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-50"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Ms. Noella C. Lubano
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a8.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Ms. Noella C. Lubano</h2>
                  <div class="meta">Partner Oraro & Company Advocates</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Noella is a Partner at Oraro & Company Advocates and a
                recognised dispute resolution and arbitration expert. She
                specialises in international arbitration, the tracing and
                recovery of assets, commercial litigation, employment and labour
                disputes, and shareholder disputes but is well regarded for her
                international arbitration and insolvency & restructuring
                expertise. Leading legal directories such as Legal 500 and
                Chambers Global have consistently recognised her for her work,
                with the latter quoting clients who said that she is "reliable,
                always available to speak on short notice and provides
                satisfactory advice. She has an exemplary knowledge of the law
                and its application and is thorough and client-oriented."
                [Chambers Global, 2022]. Additionally, in 2020, Noella was
                recognised as one of "Africa's 50 Most Promising Young
                Arbitrators" by the Association of Young Arbitrators. With a
                career spanning close to fourteen years, Noella has spoken on
                various topics around international arbitration at different
                forums such as the International Arbitration Conference in
                Kigali, Rwanda in 2017, as well as other conferences in Addis
                Ababa, Ethiopia and Nairobi, Kenya. She holds a master's degree
                from the University of Cape Town and a Bachelor of Laws degree
                from the University of Nairobi, Kenya, as well as Diploma in Law
                from the Kenya School of Law.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-37"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Damian James
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a9.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Damian James</h2>
                  <div class="meta">Quantum Expert</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Damian is a leading expert in the area of quantum, delay,
                disruption and cost evaluation. He has been appointed as
                advocate in arbitrations and as expert in adjudications. He is
                widely experienced in engineering and construction claims and
                dispute resolution. Damian has particular expertise in the
                preparation of detailed claims to recover client entitlements.
              </p>
              <p>
                Damian is skilled in the complex discipline of delay analysis
                and disruption valuation. He is able to disentangle global
                claims to establish the relationship of particular cause and
                effect. Damian is particularly adept in matters of dominancy and
                concurrency.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>

    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-25"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Mr. Abayomi Okubote
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/speakers/a10.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Abayomi Okubote</h2>
                  <div class="meta">Executive Director-Africa Arbitration Academy</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Abayomi is a scholar of the International Bar Association and graduate scholar at Queen’s University, Canada. He has garnered almost 10 years’ experience in dispute resolution and has advised government agencies and multi-national corporations on several cutting-edge projects in Africa. Abayomi had his LLM in International Commercial Law from the University College London, United Kingdom and is currently a Doctoral Researcher at Queen’s University, Ontario, Canada. His research focuses on third party funding (TPF) in International Arbitration and is proposing a new framework for the regulation of TPF.
              </p>
              <p>
                His research recently received the prestigious CIGI ILRP Doctoral Scholarship 2018. Abayomi is a counsel in the Government Business and Dispute Resolution Practices of Olaniwun Ajayi LP (a top tier commercial law firm in Nigeria) and has completed secondment programs at Baker & McKenzie LLP (London office) and 4-5 Gray’s Inn, London, United Kingdom. He has attended summer courses at the Harvard Negotiation Institute, United States and the International Chamber of Commerce in Paris. Driven by the passion for change in Africa, Abayomi founded the Association of Young Arbitrators (AYA) in 2015, and co-founded Africa Arbitration/Africa Arbitration Blog in 2017.
              </p>
              <p>
                He is a member of the Chartered Institute of Arbitrators (Nigeria and United Kingdom), Young International Arbitration Group of the LCIA and a neutral on the panel of neutrals in the Abuja Multi-Door Court House, Federal Capital Territory, Nigeria. Abayomi has been appointed by Nigerian courts and has sat as an arbitrator in a number of arbitrations in Nigeria.
              </p>
            </div>
          </div>
          <!--//modal-body-->
        </div>
        <!--//modal-content-->
      </div>
      <!--//modal-dialog-->
    </div>
    <!--//modal-->
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    dataTarget: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
    },
  },
};
</script>