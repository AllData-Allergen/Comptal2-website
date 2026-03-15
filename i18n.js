/**
 * Comptal2 Website — lightweight i18n (FR / EN)
 */
(function () {
  const TRANSLATIONS = {
    fr: {
      /* Nav */
      "nav.home": "Accueil",
      "nav.download": "Télécharger",

      /* Hero */
      "hero.badge": "Open Source & Gratuit",
      "hero.title": "Comptal2",
      "hero.subtitle": "Logiciel de comptabilité moderne — Windows, macOS, Linux",
      "hero.cta": "Télécharger Comptal2",
      "hero.discover": "Découvrir",

      /* Features */
      "features.title": "Fonctionnement",
      "features.intro": "Comptal2 centralise vos transactions bancaires et vous offre des vues claires pour piloter vos finances.",

      "features.import.title": "Import de données",
      "features.import.desc": "Importez vos fichiers CSV ou Excel. Détection automatique des colonnes et mapping personnalisable (date, libellé, montant, compte, catégorie).",
      "features.dashboard.title": "Tableau de bord",
      "features.dashboard.desc": "Statistiques en temps réel, soldes par compte, graphiques interactifs (camemberts, barres) pour une vue d'ensemble immédiate.",
      "features.finance.title": "Finance global",
      "features.finance.desc": "Revenus vs dépenses, analyses mensuelles, tendances et graphiques détaillés pour une analyse complète de vos finances.",
      "features.categorization.title": "Catégorisation automatique",
      "features.categorization.desc": "Règles configurables et apprentissage des patterns récurrents pour classer vos transactions automatiquement.",
      "features.multiAccount.title": "Multi-comptes",
      "features.multiAccount.desc": "Gérez plusieurs comptes bancaires avec soldes individuels et vue consolidée globale.",
      "features.export.title": "Export de données",
      "features.export.desc": "Exportez vos transactions filtrées au format CSV. Générez des rapports PDF personnalisés pour vos bilans.",

      /* Entreprise */
      "entreprise.badge": "Entreprise",
      "entreprise.title": "Pilotez votre activité professionnelle",
      "entreprise.desc": "Un espace dédié à la gestion complète de votre entreprise, de la facturation au suivi fiscal.",
      "entreprise.invoices.title": "Devis et factures",
      "entreprise.invoices.desc": "Créez des devis, convertissez-les en factures, suivez les paiements et générez des PDF conformes.",
      "entreprise.clients.title": "Gestion clients",
      "entreprise.clients.desc": "Répertoire de clients (particuliers/entreprises), recherche SIRENE, historique des transactions.",
      "entreprise.stock.title": "Stock et achats",
      "entreprise.stock.desc": "Inventaire, amortissements, registre d'achats, suivi de la valeur patrimoniale de l'entreprise.",
      "entreprise.registre.title": "Registres fiscaux",
      "entreprise.registre.desc": "Livre des recettes, registre des achats, rapports TVA (CA3/CA12) et rapport d'activité annuel en PDF.",
      "entreprise.stats.title": "Tableaux de bord",
      "entreprise.stats.desc": "CA total, taux de recouvrement, répartition des bénéfices par poste, évolution de l'inventaire.",
      "entreprise.card1.label": "Facture #2024-042",
      "entreprise.card1.amount": "+ 2 450,00 €",
      "entreprise.card2.label": "Devis #D-2024-018",
      "entreprise.card2.amount": "3 200,00 € HT",
      "entreprise.card3.label": "TVA collectée",
      "entreprise.card3.amount": "1 840,00 €",

      /* Association */
      "association.badge": "Association",
      "association.title": "Gérez votre association en toute conformité",
      "association.desc": "Suivi des donateurs, reçus fiscaux CERFA et analyse des dons — tout ce qu'il faut pour votre comptabilité associative.",
      "association.donors.title": "Gestion des donateurs",
      "association.donors.desc": "Particuliers et entreprises, dons en numéraire, en nature et mécénat de compétences. Liaison directe aux transactions bancaires.",
      "association.cerfa.title": "Reçus fiscaux CERFA",
      "association.cerfa.desc": "Génération conforme aux articles 200 et 238 bis du CGI. Aperçu PDF, génération individuelle ou en lot.",
      "association.registre.title": "Registre des reçus",
      "association.registre.desc": "Historique complet, filtres (actifs/annulés), traçabilité garantie avec conservation des reçus annulés.",
      "association.charges.title": "Charges et projections",
      "association.charges.desc": "Projection des charges récurrentes, suivi par catégorie, export PDF pour vos bilans associatifs.",
      "association.charts.title": "Synthèse et graphiques",
      "association.charts.desc": "Total des dons, nombre de donateurs actifs, don moyen, répartition par catégorie et top donateurs.",
      "association.card1.label": "Reçu fiscal #RF-2024-087",
      "association.card1.amount": "Don : 500,00 €",
      "association.card2.label": "Donateurs actifs",
      "association.card2.amount": "42 donateurs",
      "association.card3.label": "Total des dons 2024",
      "association.card3.amount": "18 640,00 €",

      /* Dashboard detail */
      "detail.dashboard.badge": "Tableau de bord",
      "detail.dashboard.title": "Vue d'ensemble en temps réel",
      "detail.dashboard.desc": "Le tableau de bord centralise vos indicateurs financiers clés avec des graphiques interactifs.",
      "detail.dashboard.f1.title": "Cartes de statistiques",
      "detail.dashboard.f1.desc": "Solde total, dépenses, revenus calculés en temps réel selon la période et les filtres.",
      "detail.dashboard.f2.title": "Graphiques interactifs",
      "detail.dashboard.f2.desc": "Camemberts dépenses/revenus par catégorie et courbe d'évolution des soldes par compte.",
      "detail.dashboard.f3.title": "Moyennes par catégorie",
      "detail.dashboard.f3.desc": "Mini-cartes affichant les moyennes mensuelles par catégorie, triées par importance.",
      "detail.dashboard.f4.title": "Filtres avancés",
      "detail.dashboard.f4.desc": "Filtrage par compte, catégorie, période (slider), recherche textuelle et export CSV.",

      /* Finance Global detail */
      "detail.finance.badge": "Finance Global",
      "detail.finance.title": "Analysez vos flux financiers",
      "detail.finance.desc": "Des graphiques puissants pour comprendre vos revenus, dépenses et tendances sur toutes les périodes.",
      "detail.finance.f1.title": "Graphique mensuel",
      "detail.finance.f1.desc": "Barres empilées par catégorie : visualisez la répartition des flux mois par mois.",
      "detail.finance.f2.title": "Évolution des soldes",
      "detail.finance.f2.desc": "Barres empilées par compte pour suivre l'évolution de vos soldes dans le temps.",
      "detail.finance.f3.title": "Projection vs réalité",
      "detail.finance.f3.desc": "Comparez vos projections avec les données réelles par catégorie et par période.",
      "detail.finance.f4.title": "Bilan détaillé",
      "detail.finance.f4.desc": "Répartition crédits/débits par catégorie, tableau récapitulatif et zoom jour à année.",
      "detail.finance.chartMonthly": "Graphique mensuel",
      "detail.finance.chartMonthlySub": "Dépenses par catégorie",
      "detail.finance.chartCompare": "Revenus vs Dépenses",
      "detail.finance.chartBalance": "Évolution du solde",
      "detail.finance.chartSplit": "Répartition",

      /* Édition detail */
      "detail.edition.badge": "Édition",
      "detail.edition.title": "Éditez vos transactions",
      "detail.edition.desc": "Un éditeur complet pour modifier, catégoriser et nettoyer vos données financières.",
      "detail.edition.f1.title": "Tableau éditable",
      "detail.edition.f1.desc": "Édition inline (date, libellé, débit, crédit, solde, catégorie) avec autocomplétion.",
      "detail.edition.f2.title": "Auto-catégorisation",
      "detail.edition.f2.desc": "Suggestions basées sur les libellés déjà catégorisés, validation avant application.",
      "detail.edition.f3.title": "Nettoyage des données",
      "detail.edition.f3.desc": "Suppression de doublons, correction des incohérences, insertion/suppression de lignes.",
      "detail.edition.f4.title": "Filtres par source",
      "detail.edition.f4.desc": "Filtrage par fichier source, par catégorie et par période avec sauvegarde CSV.",

      /* Projet detail */
      "detail.projet.badge": "Projet",
      "detail.projet.title": "Planifiez et suivez vos projets",
      "detail.projet.desc": "Créez des projections financières et comparez-les à la réalité pour chaque projet.",
      "detail.projet.f1.title": "Multi-projets",
      "detail.projet.f1.desc": "Créez, sélectionnez et gérez plusieurs projets indépendants avec leurs paramètres.",
      "detail.projet.f2.title": "Abonnements récurrents",
      "detail.projet.f2.desc": "Débits et crédits récurrents (journalier à annuel) avec taux variables configurables.",
      "detail.projet.f3.title": "Projection financière",
      "detail.projet.f3.desc": "Évolution du solde, solde mensuel, débits vs crédits, impact cumulé par ligne.",
      "detail.projet.f4.title": "Configuration avancée",
      "detail.projet.f4.desc": "Solde initial, plafonds de compte, priorités et création depuis catégorie ou transaction.",

      /* Import detail */
      "detail.import.badge": "Importation",
      "detail.import.title": "Importez vos données facilement",
      "detail.import.desc": "Un assistant d'import intelligent pour CSV et Excel avec détection automatique.",
      "detail.import.f1.title": "Import CSV",
      "detail.import.f1.desc": "Glisser-déposer ou sélection de fichier, détection automatique de la structure des colonnes.",
      "detail.import.f2.title": "Import Excel",
      "detail.import.f2.desc": "Support .xlsx/.xls, sélection de feuilles, association d'une feuille à un compte.",
      "detail.import.f3.title": "Mapping des colonnes",
      "detail.import.f3.desc": "Assignation visuelle des colonnes (date, libellé, débit, crédit, solde) avec aperçu.",
      "detail.import.f4.title": "Saisie manuelle",
      "detail.import.f4.desc": "Création manuelle de transactions avec choix du compte et prévisualisation avant import.",

      /* Diagram */
      "diagram.title": "Schéma du logiciel",
      "diagram.intro": "Vue d'ensemble du flux de données et des modules de Comptal2.",
      "diagram.import": "Import",
      "diagram.importSub": "CSV / Excel",
      "diagram.transactions": "Transactions",
      "diagram.transactionsSub": "Base de données",
      "diagram.dashboard": "Tableau de bord",
      "diagram.finance": "Finance global",
      "diagram.edition": "Édition",
      "diagram.entreprise": "Entreprise",
      "diagram.association": "Association",
      "diagram.projet": "Projet",
      "diagram.legendEntry": "Entrée des données",
      "diagram.legendCore": "Données centralisées",
      "diagram.legendModule": "Vues et modules",

      /* CTA */
      "cta.title": "Prêt à gérer vos finances ?",
      "cta.desc": "Gratuit, open source et disponible sur toutes les plateformes.",
      "cta.btn": "Télécharger Comptal2",

      /* Footer */
      "footer.source": "Code source",
      "footer.releases": "Releases",
      "footer.issues": "Signaler un problème",

      /* Download page */
      "dl.title": "Téléchargez Comptal2",
      "dl.detecting": "Détection de votre appareil en cours…",
      "dl.recommended": "Recommandé pour votre appareil :",
      "dl.choose": "Choisissez votre plateforme ci-dessous",
      "dl.version": "Version 1.1.0 (LTS)",
      "dl.selectSystem": "Sélectionnez un système",
      "dl.downloadFor": "Télécharger pour",
      "dl.yourPlatform": "votre plateforme",
      "dl.viewReleases": "Voir les releases",
      "dl.altText": "Utilisez un autre système ? Choisissez ci-dessous :",
      "dl.allVersions": "Voir toutes les versions sur GitHub",
      "dl.downloadBtn": "Télécharger",

      /* Chart labels */
      "chart.expenses": "Dépenses",
      "chart.income": "Revenus",
      "chart.balance": "Solde",
      "chart.jan": "Jan",
      "chart.feb": "Fév",
      "chart.mar": "Mar",
      "chart.apr": "Avr",
      "chart.may": "Mai",
      "chart.jun": "Juin",
      "chart.jul": "Juil",
      "chart.aug": "Aoû",
      "chart.sep": "Sep",
      "chart.oct": "Oct",
      "chart.nov": "Nov",
      "chart.dec": "Déc",
    },

    en: {
      "nav.home": "Home",
      "nav.download": "Download",

      "hero.badge": "Open Source & Free",
      "hero.title": "Comptal2",
      "hero.subtitle": "Modern accounting software — Windows, macOS, Linux",
      "hero.cta": "Download Comptal2",
      "hero.discover": "Discover",

      "features.title": "How It Works",
      "features.intro": "Comptal2 centralizes your bank transactions and provides clear views to manage your finances.",

      "features.import.title": "Data Import",
      "features.import.desc": "Import your CSV or Excel files. Automatic column detection and customizable mapping (date, label, amount, account, category).",
      "features.dashboard.title": "Dashboard",
      "features.dashboard.desc": "Real-time statistics, account balances, interactive charts (pie, bar) for an immediate overview.",
      "features.finance.title": "Finance Overview",
      "features.finance.desc": "Income vs expenses, monthly analysis, trends and detailed charts for comprehensive financial analysis.",
      "features.categorization.title": "Auto-Categorization",
      "features.categorization.desc": "Configurable rules and recurring pattern learning to automatically classify your transactions.",
      "features.multiAccount.title": "Multi-Account",
      "features.multiAccount.desc": "Manage multiple bank accounts with individual balances and a consolidated global view.",
      "features.export.title": "Data Export",
      "features.export.desc": "Export your filtered transactions to CSV. Generate custom PDF reports for your statements.",

      "entreprise.badge": "Business",
      "entreprise.title": "Manage your professional activity",
      "entreprise.desc": "A dedicated space for complete business management, from invoicing to tax tracking.",
      "entreprise.invoices.title": "Quotes & Invoices",
      "entreprise.invoices.desc": "Create quotes, convert them to invoices, track payments and generate compliant PDFs.",
      "entreprise.clients.title": "Client Management",
      "entreprise.clients.desc": "Client directory (individuals/businesses), SIRENE lookup, transaction history.",
      "entreprise.stock.title": "Stock & Purchases",
      "entreprise.stock.desc": "Inventory, depreciation, purchase register, tracking of business asset value.",
      "entreprise.registre.title": "Tax Registers",
      "entreprise.registre.desc": "Revenue ledger, purchase register, VAT reports (CA3/CA12) and annual activity report in PDF.",
      "entreprise.stats.title": "Dashboards",
      "entreprise.stats.desc": "Total revenue, recovery rate, profit breakdown by item, inventory evolution.",
      "entreprise.card1.label": "Invoice #2024-042",
      "entreprise.card1.amount": "+ €2,450.00",
      "entreprise.card2.label": "Quote #D-2024-018",
      "entreprise.card2.amount": "€3,200.00 excl. tax",
      "entreprise.card3.label": "VAT collected",
      "entreprise.card3.amount": "€1,840.00",

      "association.badge": "Non-Profit",
      "association.title": "Manage your non-profit with full compliance",
      "association.desc": "Donor tracking, CERFA tax receipts and donation analysis — everything you need for non-profit accounting.",
      "association.donors.title": "Donor Management",
      "association.donors.desc": "Individuals and businesses, cash donations, in-kind donations and skill-based sponsorship. Direct link to bank transactions.",
      "association.cerfa.title": "CERFA Tax Receipts",
      "association.cerfa.desc": "Compliant generation per articles 200 and 238 bis of the French Tax Code. PDF preview, individual or batch generation.",
      "association.registre.title": "Receipt Register",
      "association.registre.desc": "Complete history, filters (active/cancelled), guaranteed traceability with cancelled receipt retention.",
      "association.charges.title": "Expenses & Projections",
      "association.charges.desc": "Recurring expense projections, category tracking, PDF export for your non-profit statements.",
      "association.charts.title": "Summary & Charts",
      "association.charts.desc": "Total donations, active donor count, average donation, breakdown by category and top donors.",
      "association.card1.label": "Tax Receipt #RF-2024-087",
      "association.card1.amount": "Donation: €500.00",
      "association.card2.label": "Active donors",
      "association.card2.amount": "42 donors",
      "association.card3.label": "Total donations 2024",
      "association.card3.amount": "€18,640.00",

      "detail.dashboard.badge": "Dashboard",
      "detail.dashboard.title": "Real-time overview",
      "detail.dashboard.desc": "The dashboard centralizes your key financial indicators with interactive charts.",
      "detail.dashboard.f1.title": "Statistics Cards",
      "detail.dashboard.f1.desc": "Total balance, expenses, income calculated in real time based on period and filters.",
      "detail.dashboard.f2.title": "Interactive Charts",
      "detail.dashboard.f2.desc": "Expense/income pie charts by category and account balance evolution curve.",
      "detail.dashboard.f3.title": "Category Averages",
      "detail.dashboard.f3.desc": "Mini-cards showing monthly averages by category, sorted by importance.",
      "detail.dashboard.f4.title": "Advanced Filters",
      "detail.dashboard.f4.desc": "Filter by account, category, period (slider), text search and CSV export.",

      "detail.finance.badge": "Finance Overview",
      "detail.finance.title": "Analyze your financial flows",
      "detail.finance.desc": "Powerful charts to understand your income, expenses and trends across all periods.",
      "detail.finance.f1.title": "Monthly Chart",
      "detail.finance.f1.desc": "Stacked bars by category: visualize the breakdown of flows month by month.",
      "detail.finance.f2.title": "Balance Evolution",
      "detail.finance.f2.desc": "Stacked bars by account to track your balance evolution over time.",
      "detail.finance.f3.title": "Projection vs Reality",
      "detail.finance.f3.desc": "Compare your projections with actual data by category and period.",
      "detail.finance.f4.title": "Detailed Report",
      "detail.finance.f4.desc": "Credit/debit breakdown by category, summary table and zoom from day to year.",
      "detail.finance.chartMonthly": "Monthly Chart",
      "detail.finance.chartMonthlySub": "Expenses by category",
      "detail.finance.chartCompare": "Income vs Expenses",
      "detail.finance.chartBalance": "Balance Evolution",
      "detail.finance.chartSplit": "Breakdown",

      "detail.edition.badge": "Edition",
      "detail.edition.title": "Edit your transactions",
      "detail.edition.desc": "A complete editor to modify, categorize and clean your financial data.",
      "detail.edition.f1.title": "Editable Table",
      "detail.edition.f1.desc": "Inline editing (date, label, debit, credit, balance, category) with autocomplete.",
      "detail.edition.f2.title": "Auto-Categorization",
      "detail.edition.f2.desc": "Suggestions based on already categorized labels, validation before applying.",
      "detail.edition.f3.title": "Data Cleanup",
      "detail.edition.f3.desc": "Duplicate removal, inconsistency correction, row insertion/deletion.",
      "detail.edition.f4.title": "Source Filters",
      "detail.edition.f4.desc": "Filter by source file, category and period with CSV save.",

      "detail.projet.badge": "Project",
      "detail.projet.title": "Plan and track your projects",
      "detail.projet.desc": "Create financial projections and compare them to reality for each project.",
      "detail.projet.f1.title": "Multi-Project",
      "detail.projet.f1.desc": "Create, select and manage multiple independent projects with their own settings.",
      "detail.projet.f2.title": "Recurring Items",
      "detail.projet.f2.desc": "Recurring debits and credits (daily to yearly) with configurable variable rates.",
      "detail.projet.f3.title": "Financial Projection",
      "detail.projet.f3.desc": "Balance evolution, monthly balance, debits vs credits, cumulative impact by line.",
      "detail.projet.f4.title": "Advanced Settings",
      "detail.projet.f4.desc": "Initial balance, account ceilings, priorities and creation from category or transaction.",

      "detail.import.badge": "Import",
      "detail.import.title": "Import your data easily",
      "detail.import.desc": "A smart import wizard for CSV and Excel with automatic detection.",
      "detail.import.f1.title": "CSV Import",
      "detail.import.f1.desc": "Drag-and-drop or file selection, automatic column structure detection.",
      "detail.import.f2.title": "Excel Import",
      "detail.import.f2.desc": "Support for .xlsx/.xls, sheet selection, sheet-to-account association.",
      "detail.import.f3.title": "Column Mapping",
      "detail.import.f3.desc": "Visual column assignment (date, label, debit, credit, balance) with preview.",
      "detail.import.f4.title": "Manual Entry",
      "detail.import.f4.desc": "Manual transaction creation with account selection and preview before import.",

      "diagram.title": "Software Overview",
      "diagram.intro": "Overview of data flow and modules in Comptal2.",
      "diagram.import": "Import",
      "diagram.importSub": "CSV / Excel",
      "diagram.transactions": "Transactions",
      "diagram.transactionsSub": "Database",
      "diagram.dashboard": "Dashboard",
      "diagram.finance": "Finance Overview",
      "diagram.edition": "Edition",
      "diagram.entreprise": "Business",
      "diagram.association": "Non-Profit",
      "diagram.projet": "Project",
      "diagram.legendEntry": "Data entry",
      "diagram.legendCore": "Centralized data",
      "diagram.legendModule": "Views & modules",

      "cta.title": "Ready to manage your finances?",
      "cta.desc": "Free, open source and available on all platforms.",
      "cta.btn": "Download Comptal2",

      "footer.source": "Source code",
      "footer.releases": "Releases",
      "footer.issues": "Report an issue",

      "dl.title": "Download Comptal2",
      "dl.detecting": "Detecting your device…",
      "dl.recommended": "Recommended for your device:",
      "dl.choose": "Choose your platform below",
      "dl.version": "Version 1.1.0 (LTS)",
      "dl.selectSystem": "Select a system",
      "dl.downloadFor": "Download for",
      "dl.yourPlatform": "your platform",
      "dl.viewReleases": "View releases",
      "dl.altText": "Using another system? Choose below:",
      "dl.allVersions": "View all versions on GitHub",
      "dl.downloadBtn": "Download",

      "chart.expenses": "Expenses",
      "chart.income": "Income",
      "chart.balance": "Balance",
      "chart.jan": "Jan",
      "chart.feb": "Feb",
      "chart.mar": "Mar",
      "chart.apr": "Apr",
      "chart.may": "May",
      "chart.jun": "Jun",
      "chart.jul": "Jul",
      "chart.aug": "Aug",
      "chart.sep": "Sep",
      "chart.oct": "Oct",
      "chart.nov": "Nov",
      "chart.dec": "Dec",
    },
  };

  function getPreferredLang() {
    const saved = localStorage.getItem("comptal2-lang");
    if (saved && TRANSLATIONS[saved]) return saved;
    const browserLang = (navigator.language || "fr").slice(0, 2);
    return TRANSLATIONS[browserLang] ? browserLang : "fr";
  }

  function t(key, lang) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n, lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder, lang);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.title = t(el.dataset.i18nTitle, lang);
    });
  }

  function initLangSwitcher(lang) {
    const switcher = document.getElementById("lang-switcher");
    if (!switcher) return;
    switcher.value = lang;
    switcher.addEventListener("change", (e) => {
      const newLang = e.target.value;
      localStorage.setItem("comptal2-lang", newLang);
      applyTranslations(newLang);
    });
  }

  const lang = getPreferredLang();
  applyTranslations(lang);
  initLangSwitcher(lang);

  window.comptal2i18n = { applyTranslations, t, getPreferredLang, TRANSLATIONS };
})();
