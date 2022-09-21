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
                Randi Ayman is a Senior Research Fellow in the Department of
                International Law and Dispute Resolution of Max Planck Institute
                in Luxembourg.
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
                  <div class="meta">
                    Executive Director-Africa Arbitration Academy
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Abayomi is a scholar of the International Bar Association and
                graduate scholar at Queen’s University, Canada. He has garnered
                almost 10 years’ experience in dispute resolution and has
                advised government agencies and multi-national corporations on
                several cutting-edge projects in Africa. Abayomi had his LLM in
                International Commercial Law from the University College London,
                United Kingdom and is currently a Doctoral Researcher at Queen’s
                University, Ontario, Canada. His research focuses on third party
                funding (TPF) in International Arbitration and is proposing a
                new framework for the regulation of TPF.
              </p>
              <p>
                His research recently received the prestigious CIGI ILRP
                Doctoral Scholarship 2018. Abayomi is a counsel in the
                Government Business and Dispute Resolution Practices of Olaniwun
                Ajayi LP (a top tier commercial law firm in Nigeria) and has
                completed secondment programs at Baker & McKenzie LLP (London
                office) and 4-5 Gray’s Inn, London, United Kingdom. He has
                attended summer courses at the Harvard Negotiation Institute,
                United States and the International Chamber of Commerce in
                Paris. Driven by the passion for change in Africa, Abayomi
                founded the Association of Young Arbitrators (AYA) in 2015, and
                co-founded Africa Arbitration/Africa Arbitration Blog in 2017.
              </p>
              <p>
                He is a member of the Chartered Institute of Arbitrators
                (Nigeria and United Kingdom), Young International Arbitration
                Group of the LCIA and a neutral on the panel of neutrals in the
                Abuja Multi-Door Court House, Federal Capital Territory,
                Nigeria. Abayomi has been appointed by Nigerian courts and has
                sat as an arbitrator in a number of arbitrations in Nigeria.
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
      id="modal-speaker-9"
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
              Mr. Moise Nkundabarashi
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
                    src="assets/images/speakers/a11.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Moise Nkundabarashi</h2>
                  <div class="meta">President-Rwanda Bar Association</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Adv. Moise NKUNDABARASHI is an Advocate of the High court of
                Rwanda. He holds an LLB from the National University of Rwanda
                and a post graduate diploma in legal practice from the Institute
                of Legal Practice and development.
              </p>
              <p>
                Right after his legal education, He was called to the Bar in
                2010 after 4 years of practice, he made it to the Partnership at
                Trust law chambers. Since 2014, he heads the Litigation and
                Dispute resolution department practice at TLC. From 2014 to 2016
                he served as a council member at the East Africa Law Society.
                From 2015 He served as a council member the secretary of the
                council of the Rwanda Bar Association. From November 2021 to
                date he serves as the President of Rwanda Bar Association and
                seats at Rwanda Judicial High council, National Public
                Prosecution Authority high council and East Africa Law society
                council. He is also the current president of Great Lakes Bar
                (ABGL) a regional bar that brings together Burundi Bar
                Association, Goma Bar Association and Bukavu Bar Association. He
                is ranked by Chambers and Partners as a well-regarded litigator.
                He is on record to be among the young President of the Bar in
                the region.
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
      id="modal-speaker-36"
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
              Mr. James Banda
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
                    src="assets/images/speakers/a12.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. James Banda</h2>
                  <div class="meta">Chairperson- CIArb Zambia Branch</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                James Banda is the current Chairman of the Chartered Institute
                of Arbitrators Zambia Branch. James is the Past-President of the
                Law Association of Zambia (LAZ) and Past-President of the SADC
                Lawyers Association. He is also a former Council member of the
                International Bar Association. He holds a Master of Laws degree
                (Construction and Dispute Resolution) and a Bachelor of Laws
                degree. He is an advocate of all the Superior Courts in Zambia.
                He is a Fellow of the Chartered Institute of Arbitrators
                (FCIARB). James also serves as a Commissioner of the Small
                Claims Court in Zambia and is member of the Disputes Resolution
                Board Foundation (DRBF), The Society of Construction Law (SCL),
                and the Federation of Consulting Engineers (FIDIC)
              </p>
              <p>
                James has held several appointments as arbitrator, mediator and
                legal expert on various large scale domestic and international
                commercial disputes. His practice involves advising and
                representing parties in domestic and international arbitrations,
                adjudications and court proceedings. His clients include
                international and local employers, contractors and consultants
                on engineering, construction, energy, mining and information
                technology projects.
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
      id="modal-speaker-34"
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
              Mr. Isaac Bizumuremyi
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
                    src="assets/images/speakers/a13.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Isaac Bizumuremyi</h2>
                  <div class="meta">Managing Partner-Lex Chambers</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Isaac Bizumuremyi is a Rwandan lawyer practicing at Lex
                Chambers, one of the leading law firms in Rwanda. As the
                Managing Partner at the Firm, Isaac has been in legal practice
                for the last 14 years in areas of corporate law, commercial
                transactions, commercial Litigation, commercial arbitration,
                employment law, Intellectual Property Rights of trademarks,
                Corporate Insolvency and business turnaround.
              </p>
              <p>
                Isaac holds LL.M In International Trade and Commercial Law from
                the University of Essex, England, Master of Arts in Human Rights
                law from the University of London, a Postgraduate Certificate in
                International Business Law from the University of Cumbria,
                England, and an LL.B from the University of Rwanda.
              </p>
              <p>
                Isaac is an experienced arbitrator and member of Chartered
                Institute of Arbitrators [Ciarb-London] since 2012. He is on the
                panel of Arbitrators at Kigali International Arbitration Centre
                [KIAC]. He is a member of the African Arbitration Association.
              </p>
              <p>
                Isaac is also a member of International Association of
                Insolvency practitioners (INSOL International)-London, and in
                Rwanda he is a licensed insolvency practitioner by the office of
                Chief Insolvency Administrator. He is a member of Rwanda Bar
                Association, and a member of east African Law Society.
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
      id="modal-speaker-30"
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
              Dr. Didas Kayihura Muganga
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
                    src="assets/images/speakers/a13.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Didas Kayihura Muganga</h2>
                  <div class="meta">
                    Acting Chancellor / University of Rwanda
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Currently, Didas is the Vice Chancellor of the University of
                Rwanda, and prior to that, he was the Rector - Institute for
                Legal Practice and Development 2017- July 2022. He is a
                Commissioner for East Africa Competition Authority (EACA since
                2016), member of the East African Law society; member of the
                Rwandan Bar Association and was the Vice Chair of its
                independent Disciplinary Commission. Didas is a Fellow -
                Chartered Institute of Arbitrators – London, and is an
                Accredited member - CEDR Commercial mediations; Member - East
                African Judicial Education Council (EAJEC); member - Kigali
                International Arbitration Center’s Domestic Panel. Didas holds a
                PhD (Utrecht University) in Business Law - Corporate Law and
                Corporate Governance and an LL.M in International Business Law
                from the same University. Didas prides with an extensive
                experience in Academia and academic management, Practice and
                management of Law and Arbitration. A passionate practitioner of
                ADR with specific interests in Arbitration and Mediation.
                Contacts: dkayihura@fountainadvocates.com or
                didaskayihura@gmail.com, +250 788 495 778 / +250 788 307 375.
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
      id="modal-speaker-43"
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
              Mr. Eugenio Bettella
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
                    src="assets/images/speakers/a14.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Eugenio Bettella</h2>
                  <div class="meta">Partner-BERGS&MORE</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Founding partner of Bergs & More, Eugenio is an Italian
                qualified lawyer with a strong litigation and arbitration
                background at national and international level, in the fields of
                civil, corporate, commercial and trade law, credit protection as
                well as public and private tenders.
              </p>
              <p>
                He assists companies in national and international mediation and
                arbitration proceedings, specifically in front of IDRC, National
                and International Arbitration Chamber of Milan, ICCI, LCIA,
                CIETAC, DIAC. He is in the list of arbitrators in the
                Tunisian-Italian Chamber of Arbitration in Tunis, the
                Italian-German Chamber of Commerce, Russian Arbitration Center
                at the Russian Institute of Modern Arbitration.
              </p>
              <p>
                On corporate field, he has accrued a large experience at
                national and international level in M&A transactions, commercial
                contracts, FDI and international joint venture, practicing in
                both common law and civil law jurisdictions mainly in East &
                West African countries, in Middle East, U.S., Europe and Russia.
              </p>
              <p>
                Eugenio is speaker in several conferences and masters on
                subjects related to national and international litigation and
                arbitration, FDI, infrastructure and energy sector. (On 2022:
                KEPSA Kenya “A Partnership to let Africa grow”; ICE, SACE
                Assafrica “International Contract in Africa”, AfricaeAffari,
                MAECI, Assafrica, Assolombarda “Africa and Gulf Business
                Opportunities”; Cattolica University Master “Main legal systems,
                contract law and litigation”; University of Padua “Joint
                Ventures and international contracts”).
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
      id="modal-speaker-32"
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
              Mr. Emmanuel Butare
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
                    src="assets/images/speakers/a15.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Emmanuel Butare</h2>
                  <div class="meta">Partner MRB Attorneys</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Emmanuel Butare is a Partner and one of the Founders of MRB
                Attorneys. He holds an LLB (Hons) of the National University of
                Rwanda, LLM, Ottawa University, a Postgraduate Diploma in legal
                Practice- ILPD, a certified Fellow with the London Chartered
                Institute of Arbitrators- FCIArb, as well as a Certificate in
                Global Arbitration from Hamline School of Law and Queen Mary
                University plus a certificate in International Investment Treaty
                and Arbitration by Africa International Legal Awareness. He
                worked as an assistant lecturer at the Law School, a Training
                coordinator in the Rwandan Judiciary, and Principal State
                Attorney. He was part of the team that negotiated the launch of
                the Tripartite Free Trade Area negotiations between the EAC,
                COMESA and SADC.  He is a member of the Rwanda Bar Association,
                Member of KIAC Panel of Arbitrators, and has handled several
                arbitrations. He is also a court accredited mediator having
                mediated cases from different courts including the Supreme
                Court.
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
      id="modal-speaker-28"
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
              Mr. Athanase Rutabingwa
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
                    src="assets/images/speakers/a14.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Athanase Rutabingwa</h2>
                  <div class="meta">
                    MP-MRB Attorneys & Chairman of CIArb/Rwanda Branch
                  </div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Athanase is a licensed legal practitioner in the Republic of
                Rwanda. He has 22 years` experience in legal advisory roles. His
                core legal practice areas include corporate/commercial law,
                alternative dispute resolution mechanisms, litigation in
                commercial and financial services, energy, mining and labour
                matters.
              </p>
              <p>
                He has handled both domestic and international arbitration
                matters, as either as Counsel or an Arbitrator to the dispute.
                He is a Fellow (FCIArb) in arbitration, and is the current
                Chairman of the Chartered Institute of Arbitrators (CIArb
                Rwanda), and also the Managing Partner – MRB Attorneys.
              </p>
              <p>
                He holds a Master`s Degree in International Trade Policy and
                Trade Law (Lund University – Sweden) and a Bachelor`s Degree in
                Law (UNR). He is a seasoned insolvency administrator. He has
                served on a number of Board of Directors for both private and
                public entities in Rwanda. He is the past President of the
                Rwanda Bar Association and also the past Chairman of the Kigali
                City Council.
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
      id="modal-speaker-33"
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
              Mr. Anish Wadia
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
                    src="assets/images/speakers/a16.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Anish Wadia</h2>
                  <div class="meta">International Arbitrator</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Mr. Anish WADIA, C.Arb, CIP(FAIADR), PAP-KFCRI, SFBiam, FACICA,
                FMIArb, FHKIArb, FSIArb, FPIArb, FAArb, FPD, FAMINZ(Arb/Med),
                FMP-KFCRI, CFCILS is a highly experienced and internationally
                accredited full-time independent Chartered Arbitrator,
                Accredited Mediator and Adjudicator; with experience in common
                law and civil law systems, laws of China and Hong Kong, other
                hybrid legal systems across the African continent, and an
                understanding of Islamic laws. He is also an Accredited Sports
                Arbitrator (AIAC / Olympic Council of Malaysia), and a lawyer in
                India (Advocate), England & Wales (Solicitor Advocate), and
                Kazakhstan (AIFC Court).
              </p>
              <p>
                He is the first ever Indian qualified lawyer and the youngest
                ever individual in the world to be accredited as a Chartered
                Arbitrator in CIArb’s over 100-year history. Has held and
                currently holds several other senior leadership roles on the
                Boards / Governing Council of several ADR organisations across
                the globe including in India, Germany, Malaysia, Singapore,
                Switzerland, U.K. and U.S.A. This includes sitting on CIArb's
                global Examination Board, Practice & Standards Committee and
                Professional Development Advisory Group - he is also one of a
                few people in the world who is fully approved by CIArb as a
                Regional Pathway Leader (RPL) and as an AFL Course Director,
                Assessor and Tutor across all CIArb courses and assessment
                programmes.
              </p>
              <p>
                He is a recipient of numerous accolades in the field of
                International ADR including ranked by Who’s Who Legal since 2021
                as "one of the most sought-after arbitrators". Admitted on the
                ADR Panel/Roster/List/Database of over 70 (seventy) Institutions
                across the globe spanning every continent including CIArb's
                Presidential Panel. He is regularly invited as a Speaker,
                Trainer and Lecturer on topics related to International ADR
                across the globe including for members of the Judiciary
                (including current Supreme Court Justices in The Bahamas,
                Cameroon and Pakistan). You can view his detailed profile at:
                www.anishwadia.com
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
      id="modal-speaker-12"
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
              Mr. Christopher Adebayo Ojo
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
                    src="assets/images/speakers/a17.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mr. Christopher Adebayo Ojo</h2>
                  <div class="meta">SAN, International Arbitrator</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Chief Bayo Ojo, a Senior Advocate of Nigeria was called to the
                Nigerian Bar in 1978 after graduating from the University of
                Lagos, Nigeria in 1977. He obtained LL.M from the London School
                of Economics, University of London in 1982 and later got
                admitted as a Solicitor of the Supreme Court of England and
                Wales.
              </p>
              <p>
                Since then he has been in active Commercial law, International
                Law, Litigation, Mediation, Arbitration and Alternative Dispute
                Resolution practice. He has acted as sole Arbitrator, member of
                arbitration panels, and as Counsel in numerous domestic and
                international arbitrations both at the International Chamber of
                Commerce Paris (ICC), International Centre for Settlement of
                Investment Disputes Washington DC (ICSID), the American
                Arbitration Association (AAA) and the London Court of
                International Arbitration (LCIA) over the last thirty five years
                involving complex oil and gas, investments, infrastructure,
                concessions, public private partnerships, power, mining and
                commercial ventures. He has also acted as expert witness in
                international arbitrations including ICSID. He has mediated on
                several disputes as well.
              </p>
              <p>
                He is a former Attorney General and Minister of Justice of the
                Federal Republic of Nigeria, past President of the Nigerian Bar
                Association (NBA), past Chairman of the Nigerian Legal Aid
                Council and the Chartered Institute of Arbitrators, Nigeria
                Branch. Ojo was until recently a member of the United Nations
                International Law Commission (ILC) Geneva Switzerland, Council
                member of the Section on Energy and Natural Resources Law of the
                International Bar Association, a member of the ICSID Panel of
                Arbitrators, Washington, DC, a member of the Panel of the
                Permanent Court of Arbitration, Hague, Netherlands, Alternate
                Chairman of UNESCO Appeals Board in Paris, a member of the Board
                of Trustees of the Chartered Institute of Arbitrators London,
                President of the African Users’ Council of the London Court of
                International Arbitration (LCIA). He is currently the President
                of the African Arbitration Association, expert member of the
                Chinese International Commercial Court (CICC) and the Board of
                the Cairo Regional Centre for International Commercial
                Arbitration (CRCICA).
              </p>
              <p>
                He is a Chartered Arbitrator, a Fellow of the Institute of
                Chartered Mediators and Conciliators (ICMC) and the Institute of
                Construction Industry Arbitrators (ICIARB). He is also a Fellow
                of the Nigerian Institute of Advanced Legal Studies and a patron
                of the Nigerian Society of International Law and the
                International Law Association, Nigerian Branch.
              </p>
              <p>
                He is the Editor-in-Chief of the Nigerian Journal of Arbitration
                and Mediation (NJAM) and African Journal of Arbitration and
                Mediation (AJAM). He is the co-author of The Handbook of
                Arbitration and ADR Practice in Nigeria and a recipient of the
                National Honour of Commander of the Order of the Niger (CON) for
                meritorious service to the nation. He has over the years spoken
                at many workshops, seminars and delivered numerous public
                lectures both within and outside Nigeria.
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
      id="modal-speaker-38"
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
              Dr. Fidele Masengo
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
                    src="assets/images/speakers/a15.png"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Fidele Masengo</h2>
                  <div class="meta">former KIAC SG</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Dr. Fidele Masengo has a PhD in Law from the University of
                Antwerp (Belgium 2010), a Master in Economic law (DESS) from the
                University of Louvain (Belgium 2003). 
              </p>
              <p>
                He works as a Legal Consultant, an Arbitrator (Fellow of the
                Chartered Institute of Arbitrators of UK- FCIArb) and a
                Certified Mediator. Former Secretary General of the Kigali
                International Arbitration Center (July 2015-January 20221) 
              </p>
              <p>
                His background in both arbitration and law in general, includes,
                serving as Arbitrator, Mediator, lecturer of law (Business,
                Arbitration, Land law) at various universities in Rwanda and
                East Africa. Member of the Rwanda Bar Association (Advocate)
                since 2006. He has served to the First Board of Director of
                Kigali International Arbitration Center since its establishment
                in January 2012 up to September 2017. He serves on the Board of
                Directors of The African Arbitration Association; He seats on
                the Governing Council of the JANADA International Arbitration
                Centre- Nigeria. Fidele has also served as Deputy Chief of Party
                for a USAID-Chemonics Rwanda Land Project (2011-2015), as Legal
                Counsel of Rwanda Utilities Regulation Agency (2004-2005) and as
                Director of Administration of the Justice at Ministry of Justice
                (1999-2004). He has written articles, books. He has attended
                many Conferences as speaker.
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
      id="modal-speaker-19"
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
              Ms. Elodie Dulac
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
                    src="assets/images/speakers/a18.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Ms. Elodie Dulac</h2>
                  <div class="meta">Partner, King & Spalding</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Elodie Dulac is a partner in King & Spalding international
                arbitration group in Singapore, where she has been based for
                over 15 years. She specialises in international commercial
                arbitration, investment treaty arbitration and public
                international law. Elodie has particular expertise in energy,
                mining, joint venture/shareholder disputes as well as disputes
                involving States and State-owned entities. In addition to her
                work as counsel, Elodie has been appointed as arbitrator in more
                than 20 arbitrations, including under the auspices of the ICC,
                HKIAC, SIAC, AIAC, KIAC and ad hoc.  
              </p>
              <p>
                Elodie has been consistently recognised as a leading individual
                for international arbitration in all major legal directories.
                She has been described as “a class act, with a world of
                experience and good instincts”, an “‘outstanding practitioner’
                who is recognised for her broad knowledge of investment law” and
                a “‘highly intellectual lawyer with deep expertise regarding
                energy disputes’ who possesses a ‘profound understanding of
                investment arbitration’”.
              </p>
              <p>
                Elodie is a co-founder of the East Africa International
                Arbitration Conference and has been a visiting lecturer on
                international arbitration at several universities in Ethiopia.
              </p>
              <p>
                A French national, Elodie is admitted to practice in England &
                Wales (Solicitor-Advocate) and Paris, France. She is a
                Registered Foreign Lawyer at the Singapore International
                Commercial Court.
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
      id="modal-speaker-17"
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
              Dr. Jimmy Koddo
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
                    src="assets/images/speakers/a19.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Dr. Jimmy Koddo</h2>
                  <div class="meta">International Arbitrator</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Dr. Mahutodji Jimmy Vital KODO, Attorney at law (France), Member
                of the Permanent Court of Arbitration (The Netherlands); the
                Africa Commission of the International Court of Arbitration of
                the International Chamber of Commerce (France); the Singapore
                International Arbitration Court Users Council. Former Technical
                Advisor to the President of the Common Court of Justice and
                Arbitration of the Organisation for the Harmonisation of
                Business Law in Africa, Dr. Kodo published the book Arbitration
                in Africa under OHADA Rules (Kluwer, 2020).  
              </p>
              <p>
                A Fellow of the Chartered Institute of Arbitrators (United
                Kingdom), Dr. Kodo is a certified arbitrator of the CCJA and is
                listed on the Arbitrator Roster of many institutions (inter
                alia, LCA - Nigeria; MIAC – Mauritius; SHAC - China; IAI –
                France).
              </p>
              <p>
                As an independent practitioner, Dr. Kodo has acted as
                co-arbitrator in Investor-State disputes and as sole arbitrator
                and counsel in commercial and construction disputes.
              </p>
              <p>
                In 2021, as a Consultant for the Investment Climate Reform
                Facility and implemented by GIZ (Germany) and three other
                institutions, Dr. Kodo revised the Arbitration Rules of the
                National Centre for Arbitration, Conciliation and Mediation of
                Kinshasa, Democratic Republic of Congo; and trained more than
                eighty arbitrators of the centre.
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
      id="modal-speaker-39"
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
              Mrs. Adedoyin Rhodes-Vivour
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
                    src="assets/images/speakers/a20.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mrs. Adedoyin Rhodes-Vivour</h2>
                  <div class="meta">Managing Partner-DRV</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Adedoyin Rhodes-Vivour, lawyer and arbitrator (British Chevening
                Scholar) is a Chartered Arbitrator and Fellow of the Chartered
                Institute of Arbitrators (CIArb) with over 40 years’ experience
                in legal practice. She is a Notary Public of Nigeria called to
                the Nigerian Bar in 1981. She is a Senior Advocate of Nigeria.
                Over the past 40 years she has acquired very significant
                experience in arbitration. She is recognised in various
                publications including Expert Guides, Who is Who Legal and Women
                in Business Law as having very significant experience in
                International and domestic arbitration. She is a member of the
                ICC Paris International Court of Arbitration and member of the
                World Bank Group Sanctions Board - the final decision maker in
                all contested cases of sanction-able misconduct occurring in
                development projects financed by the World Bank Group. She has
                arbitrated disputes involving matters in various areas including
                Energy and Natural resources, Construction and Infrastructural
                projects, Banking and Finance, Maritime, Labour and
                Telecommunications. She has written several articles on
                Arbitration/ADR and regularly delivers papers at international
                and domestic conferences and training events. She is an approved
                tutor of the CIArb. She is the author of the book titled:
                ‘Commercial Arbitration Law and Practice in Nigeria through the
                Cases’ Published by LexisNexis.
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
      id="modal-speaker-46"
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
              Mrs. Obosa Akpata
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
                    src="assets/images/speakers/a21.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mrs. Obosa Akpata</h2>
                  <div class="meta">PATRELI PARTNERS</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Obosa Akpata is a versatile legal practitioner with over 30
                years of post-call-to-bar experience. She is Principal Partner
                of Patreli Partners, a Nigerian Law firm versed in commercial
                law practice. Obosa is a Chartered Arbitrator of the Chartered
                Institute of Arbitrators (UK). She is an Approved Tutor and
                Assessor of this worldwide Institute and serves on the Executive
                Committee of the Nigeria Branch (first Co-ordinator of the Young
                Members Group, past Secretary, and currently 3rd Vice-Chairman).
                She is an Accredited Mediator of the Centre for Effective
                Dispute Resolution (CEDR), a Fellow of the Institute of
                Construction Industry Arbitrators (FICIArb), and an Associate of
                the Chartered Institute of Taxation of Nigeria (ACITN). She is
                also a member of the African Arbitration Association (AfAA) and
                the ICC Nigeria Commission on Arbitration and ADR.
              </p>
              <p>
                She is an active member of the Nigerian Bar Association (NBA)
                Lagos Branch having served on different committees including
                Chair of the Arbitration and ADR Committee of the Section on
                Business Law (SBL) from 2018 to 2020.
              </p>
              <p>
                Obosa sits as Arbitrator and has acted as sole, party appointed,
                and chair of arbitral panels in both institutional and ad hoc
                arbitrations. She is also an experienced Mediator. Obosa has
                some articles to her credit and is co-author of the 2nd edition
                of “The Nigerian Arbitration Law in Focus”.
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
      id="modal-speaker-47"
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
              Mrs. Aurélia Kamga Mafongo
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
                    src="assets/images/speakers/a22.jpg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Mrs. Aurélia Kamga Mafongo</h2>
                  <div class="meta">Chazai Wamba Law Firm</div>
                </div>
                <!--//col-->
              </div>
              <!--//row-->
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Aurélia Sylvia MAFONGO KAMGA is a senior associate at Chazai
                Wamba law Firm, a business law firm based in Cameroon.
              </p>
              <p>
                She is a barrister and solicitor to the Nigerian and Cameroon
                Bars.
              </p>
              <p>
                Her practice is on general corporate matters, project financing,
                commercial transactions and Alternative Dispute Resolution with
                a focus on arbitration.
              </p>
              <p>
                She is a former International Chamber of Commerce Young
                Arbitrator Forum (ICC-YAF) Representative for Africa, Middle
                East and Turkey. She organises, attends and presents papers at
                several conferences around the world, to promote ADR mechanisms
                among young practitioners. She is an active member of the
                Association for the Promotion of Arbitration in Africa (APAA), a
                member of the Association of Young Arbitrators (AYA), Young
                International Council of Commercial Arbitration (ICCA), among
                the Arbitral Women, ERA pledge signatory and an Associate of the
                United Kingdom Chartered Institute of Arbitrators (CIArb).
              </p>
              <p>
                Prior to working at a law firm, she was at the Common Court of
                Justice and Arbitration (CCJA-OHADA) where she gained experience
                in arbitration.
              </p>
              <p>
                She is a holder of a Masters in international disputes from the
                International Relations Institute of Cameroon.
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
      id="modal-speaker-s1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="desc p-4 p-lg-5">
              <p>
                The Private Sector Federation –Rwanda (PSF) is a professional
                organization, dedicated to promote and represent the interests
                of the Rwandan business community. It is an umbrella
                organization that groups 10 professional chambers. It was
                established in December 1999, replacing the former Rwanda
                Chamber of Commerce and Industry.
              </p>
              <p>
                The Private Sector Federation (PSF) has registered major
                successes since its creation in 1999. Beyond a strong brand and
                membership base, PSF pioneered Business Development Services
                (BDS), registered wins in advocacy and played a strong national,
                regional and International role.
              </p>
              <p>Call: +(250) 788 123 300</p>
              <p>Email: secretariat@psf.org.rw</p>
              <p>PO Box: 319 Kigali Rwanda</p>
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
      id="modal-speaker-s2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="desc p-4 p-lg-5">
              <p>
                MRB Attorneys is a General Service Law Firm with a strong focus
                on Corporate & Commercial Law, Banking and Investment
                transactional advisory work. MRB also provides services in the
                areas of Dispute Resolution, policy development as well as legal
                audits, due diligences, legal and legislative drafting. The firm
                through its partners and associates has advised and continue to
                advise key corporate clients in Rwanda that include banks,
                private and public companies, international organizations and
                government agencies.
              </p>
              <p>
                MRB is part of an expanding network throughout Africa. Through
                this network, the firm has formed a number of alliances with
                other law firms’ practicing in Africa and other jurisdictions
                with a subsequent view of establishing a single African Law firm
                with global links all over the world.
              </p>
              <p>
                At MRB Attorneys we excel in the area of Alternative Dispute
                Resolution. Our lawyers are members of reputable dispute
                resolutions centers such as the Kigali International Arbitration
                Centre (KIAC) and the London Institute of Chartered Arbitrators
                (CIArb) and as such, have vast experience in International
                Arbitration proceedings either as Counsel or Arbitrators.
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
      id="modal-speaker-s3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="desc p-4 p-lg-5">
              <p>
                GENI & KEBE is a full-service commercial law firm providing
                legal services in sub-Saharan Africa. Founded in 1912, GENI &
                KEBE is the oldest law firm in Senegal. Over 100 years on, GENI
                & KEBE now works in collaboration with Affiliate Offices in 13
                countries to provide a full spectrum of legal services across
                the region.
              </p>
              <p>
                Chambers Global interviewees attest that GENI & KEBE provides
                “high-quality advice and an ability to handle pan-African
                corporate transactions” and acknowledge GENI & KEBE as “one of
                Senegal’s premier firms thanks to its international approach and
                high standard of work.”
              </p>
              <p>
                With a strong history and regional presence, GENI & KEBE
                effectively serves the needs of clients in a globalised world.
                Lawyers have lived and worked internationally, so they
                appreciate the foreign perspective; however, the firm is
                homegrown, and advisers know the local business and government
                environments intimately.
              </p>
              <p>
                GENI & KEBE is a member of DLA Piper Africa, an alliance of
                independent law firms working together in association with DLA
                Piper.
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
      id="modal-speaker-s4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="desc p-4 p-lg-5">
              <p>
                Jus Mundi is a Paris and New York-based legal tech providing
                smart search tools for commercial & investment arbitration
                research. We offer the broadest & exclusive collection of
                commercial arbitration awards from a range of sources, including
                data from key partnerships with the world’s leading
                institutions, such as ICC, ICDR & IBA. By combining law &
                technology, we enhance lawyers’ decision-making by giving them
                access to critical legal information to win cases. Jus Connect
                by Jus Mundi is a professional network of 40,000 members
                providing detailed analytics on arbitration professionals to
                boost transparency & diversity across the field. To learn more,
                please visit jusmundi.com.
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