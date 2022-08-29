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
                    src="assets/images/speakers/speaker-1.jpg"
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