import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META TAGS
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "iLovePlantCare | Indoor Plant Care, Tips & Guides for All Seasons";
  const description =
    "Learn how to care for your indoor plants with iLovePlantCare. Explore watering schedules, light levels, humidity tips, and beginner-friendly care guides for hundreds of houseplants.";
  const url = "https://iloveplantcare.com/";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "plant care tips",
        "indoor plant guide",
        "watering schedule",
        "light requirements for plants",
        "humidity for houseplants",
        "plant problems and solutions",
        "fertilizer schedule",
        "plant care database",
        "how to care for indoor plants",
        "plant care beginners",
      ].join(", "),
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#4CAF50" },
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   UTIL
========================================================= */
const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-green-200 bg-white p-5 shadow-sm">
    <h3 className="text-lg font-semibold text-green-900">{title}</h3>
    <div className="mt-2 text-sm text-green-800">{children}</div>
  </div>
);

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "iLovePlantCare",
        url: "https://iloveplantcare.com/",
        description:
          "iLovePlantCare helps you understand, grow, and maintain healthy indoor plants with care guides, watering reminders, and environment tips.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://iloveplantcare.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "iLovePlantCare",
        url: "https://iloveplantcare.com/",
        logo: "https://iloveplantcare.com/logo.png",
        sameAs: [
          "https://www.youtube.com/@iLovePlantCare",
          "https://www.pinterest.com/iloveplantcare/",
          "https://www.instagram.com/iloveplantcare/",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is iLovePlantCare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "iLovePlantCare is a free resource that teaches plant owners how to care for houseplants through easy guides, videos, and seasonal checklists.",
            },
          },
          {
            "@type": "Question",
            name: "Does iLovePlantCare only focus on indoor plants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Primarily yes. Our focus is on indoor and container gardening, though many care tips also apply to outdoor plants and balcony gardens.",
            },
          },
          {
            "@type": "Question",
            name: "Will iLovePlantCare have videos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The iLovePlantCare YouTube channel shares weekly visual guides on repotting, pruning, and plant propagation.",
            },
          },
          {
            "@type": "Question",
            name: "Can I identify plants using iLovePlantCare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our searchable plant database includes visual identifiers for hundreds of species, with care needs and common problems listed.",
            },
          },
          {
            "@type": "Question",
            name: "How do watering reminders work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide general watering intervals by plant type and local humidity conditions, helping users customize their own care rhythm.",
            },
          },
          {
            "@type": "Question",
            name: "Are all plant care guides free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All written guides and videos are free to access. Optional downloadable planners may be offered later.",
            },
          },
          {
            "@type": "Question",
            name: "Does iLovePlantCare recommend products?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on education, not sales. Occasionally, tools or soil mixes may be mentioned when directly relevant to plant health.",
            },
          },
        ],
      },
    ],
  } as const;

  return (
    <main className="bg-green-50/50 text-green-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR */}
      <div className="w-full border-b border-green-100 bg-green-50/70">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-green-700">
          🌱 Plant happiness starts here • Updated{" "}
          {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold text-green-900 leading-tight">
            Care for Every Leaf, Grow with Confidence
          </h1>
          <p className="text-lg text-green-800 leading-relaxed">
            <strong>iLovePlantCare</strong> helps you nurture healthier
            houseplants through science-backed tips, simple routines, and visual
            guides for every season.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#guides"
              className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
            >
              Explore Guides
            </a>
            <a
              href="#watering"
              className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
            >
              Learn Watering Basics
            </a>
            <a
              href="#light"
              className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
            >
              Find Light Levels
            </a>
          </div>
        </div>
        <Card title="Featured Topics">
          <ul className="mt-2 grid gap-2 text-sm text-green-800 sm:grid-cols-2">
            <li>💧 Proper watering techniques</li>
            <li>🌤️ Light and humidity needs</li>
            <li>🪴 Soil and fertilizer types</li>
            <li>🍃 Pest prevention & treatment</li>
          </ul>
        </Card>
      </section>

      {/* GUIDES */}
      <section id="guides" className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <h2 className="text-2xl font-bold text-green-900">
          Beginner-Friendly Plant Care Guides
        </h2>
        <p className="text-green-800">
          Whether you’re caring for a pothos, fiddle-leaf fig, or peace lily,
          our plant library covers step-by-step care routines, watering
          intervals, and light placement for every environment.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="🌿 Watering Schedules">
            Learn how to recognize signs of overwatering or dryness, and how to
            adjust watering frequency by soil type and humidity.
          </Card>
          <Card title="☀️ Light & Placement">
            Understand the difference between low-light, medium-light, and
            bright indirect spots, with visual diagrams for indoor setups.
          </Card>
          <Card title="🌱 Soil & Nutrition">
            Discover soil mixes for succulents, tropicals, and ferns, plus how
            to safely fertilize during active growth seasons.
          </Card>
        </div>
      </section>

      {/* LONG SEO SECTION */}
      <section
        id="plantcare-knowledge"
        className="mx-auto max-w-7xl px-4 py-8 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Understanding Plant Care: From Roots to Leaves
        </h2>
        <p>
          Healthy plant care begins with understanding your plant’s natural
          habitat. Every species evolved under specific light, temperature, and
          soil conditions. iLovePlantCare simplifies this complexity by helping
          you recreate those microenvironments indoors. From tropical humidity
          levels to arid cactus soils, our guides focus on matching your care
          habits to what each plant truly needs.
        </p>
        <p>
          Topics include watering schedules, soil aeration, repotting
          techniques, pest prevention, humidity regulation, and seasonal care
          adjustments. Each guide is built for beginners yet detailed enough for
          enthusiasts who want to go deeper.
        </p>
        <p>
          Whether you’re growing a single peace lily or managing a full indoor
          jungle, the goal is to make plant care relaxing, not stressful.
          iLovePlantCare encourages observation over perfection, learn to read
          your plants’ leaves, stems, and soil moisture rather than following
          rigid rules.
        </p>
      </section>

      <section
        id="comprehensive-plant-care"
        className="mx-auto max-w-7xl px-4 py-8 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          The Complete Guide to Indoor Plant Care and Growth
        </h2>
        <p>
          Caring for indoor plants is both an art and a science. At
          iLovePlantCare, our goal is to help you understand how plants grow,
          breathe, and respond to the environments we create for them. Whether
          you’re raising a low-light peace lily, a sun-loving jade plant, or a
          humidity-hungry fern, the key to thriving greenery is learning the
          language of your plants. Leaves, stems, and soil tell you everything
          you need to know, if you know how to read the signs.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌿 Understanding the Fundamentals of Plant Health
        </h3>
        <p>
          Every indoor plant depends on three environmental foundations: light,
          moisture, and airflow. Light fuels photosynthesis, water transports
          nutrients, and airflow prevents mold and stagnation. The balance of
          these elements determines how well your plant can sustain new growth.
        </p>
        <p>
          Start by identifying your plant’s natural habitat. Tropical plants
          thrive in indirect light and humid conditions. Succulents, on the
          other hand, evolved in arid climates where sunlight is intense and
          water is scarce. Mimicking those native conditions indoors, through
          lighting, soil, and humidity, makes all the difference between a
          struggling plant and one that grows year-round.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          ☀️ Light Requirements and Placement
        </h3>
        <p>
          The number-one reason indoor plants decline is improper lighting. Too
          much direct sunlight scorches leaves; too little causes drooping and
          pale foliage. The solution is understanding{" "}
          <strong>light intensity</strong> and
          <strong> duration</strong>. South-facing windows offer bright light,
          while east-facing windows provide soft morning sun ideal for
          medium-light species. For darker rooms, full-spectrum LED grow lights
          can supplement natural light.
        </p>
        <p>
          Rotate your plants every two weeks to encourage even growth, and clean
          leaves regularly so dust doesn’t block light absorption. Light is
          energy, and energy fuels new shoots, roots, and blooms.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          💧 Watering Techniques
        </h3>
        <p>
          Watering is where most new plant owners go wrong. Overwatering is the
          silent killer of houseplants because excess moisture suffocates roots.
          iLovePlantCare recommends the “finger test”, insert your finger one
          inch into the soil. If it feels dry, it’s time to water; if it’s damp,
          wait a few more days.
        </p>
        <p>
          Always use pots with drainage holes, and empty saucers after watering
          to prevent root rot. For tropical species, try bottom-watering,
          letting the pot absorb moisture from below. This encourages deeper
          root growth and reduces the risk of fungal gnats.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌬️ Humidity and Temperature Control
        </h3>
        <p>
          Indoor heating and air conditioning can dry out the air, leaving
          tropical plants dehydrated. The ideal humidity range for most indoor
          species is 40–60%. You can raise humidity by misting leaves, using
          pebble trays, or grouping plants together to create a microclimate.
          For consistent control, a small cool-mist humidifier can maintain
          ideal moisture levels year-round.
        </p>
        <p>
          Temperature stability is just as important. Avoid placing plants near
          heaters, vents, or drafty windows. Most indoor plants prefer
          temperatures between 18°C and 26°C (65°F–78°F). Sudden fluctuations
          can cause leaf drop or shock even in resilient species.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌱 Soil Types and Repotting Tips
        </h3>
        <p>
          Soil provides more than support, it’s a living ecosystem. Different
          plants require different soil textures to balance moisture retention
          and drainage. Succulents and cacti need sandy, fast-draining soil,
          while tropicals like monstera or pothos prefer rich mixes with perlite
          and coco coir. Orchid species do best in chunky bark blends that allow
          air circulation around roots.
        </p>
        <p>
          Repot every 12–18 months to refresh nutrients and prevent root
          crowding. Always choose a pot that’s one size larger than the current
          one, and never bury the plant deeper than before. After repotting,
          water lightly and give your plant a week to adjust before fertilizing
          again.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌼 Fertilizing and Feeding
        </h3>
        <p>
          Just like humans need vitamins, plants rely on nutrients, nitrogen
          (N), phosphorus (P), and potassium (K), for balanced growth. A
          general-purpose liquid fertilizer works for most houseplants. Feed
          every 4–6 weeks during spring and summer when growth is active. In
          autumn and winter, reduce feeding frequency as most plants enter a
          dormant phase.
        </p>
        <p>
          Always dilute fertilizers to half strength to avoid burning the roots,
          and flush the soil with plain water every few months to remove mineral
          buildup. Organic options like compost tea or worm castings are also
          excellent for maintaining long-term soil health.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🐛 Pest Prevention
        </h3>
        <p>
          Even the healthiest plants can attract pests. Common culprits include
          spider mites, aphids, mealybugs, and fungus gnats. Regularly inspect
          the underside of leaves for webbing or sticky residue. Wipe leaves
          with a mixture of mild soap and water, or use neem oil as a natural
          insect deterrent. Avoid harsh chemical sprays indoors, they harm
          beneficial microbes and can stress sensitive plants.
        </p>
        <p>
          Prevention is easier than cure: quarantine new plants for a week
          before placing them with others, maintain airflow around pots, and
          avoid over-watering to discourage gnats and mildew.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌾 Propagation and Growing New Plants
        </h3>
        <p>
          Propagation is one of the most rewarding parts of plant care. From a
          single stem cutting, you can create a new plant and expand your indoor
          garden. Common methods include water propagation, leaf cuttings, and
          division.
        </p>
        <p>
          For example, pothos and philodendron cuttings root easily in water
          within a few weeks. Once roots reach 2–3 inches, transfer them into
          soil. Succulents like echeveria can regrow from a single leaf placed
          on moist soil. Herbs such as mint and basil propagate well through
          stem cuttings in bright, indirect light.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🍂 Common Plant Problems and Quick Fixes
        </h3>
        <p>
          Yellowing leaves often mean overwatering or poor drainage. Crispy
          brown edges indicate low humidity or excessive sunlight. If your plant
          looks droopy, check for compacted roots or underwatering. Adjust
          slowly, plants respond best to gradual changes rather than sudden
          corrections.
        </p>
        <p>
          iLovePlantCare’s diagnostic library provides visual examples of leaf
          discoloration, spotting, or curling to help you identify the cause and
          correct it quickly. Many problems can be reversed with consistent
          care, patience, and observation.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌻 Seasonal Plant Care Tips
        </h3>
        <p>
          Seasonal changes affect plant metabolism. In spring and summer, plants
          grow actively, this is the best time for repotting, fertilizing, and
          propagation. In autumn, reduce watering and move sensitive species
          away from cool drafts. Winter care focuses on maintaining stable
          humidity and avoiding cold shock from window glass. Rotate plants
          occasionally so all sides get light during shorter days.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌸 The Joy and Mindfulness of Plant Care
        </h3>
        <p>
          Beyond aesthetics, caring for plants improves mental well-being.
          Studies show that indoor greenery lowers stress, improves focus, and
          promotes a sense of accomplishment. Watering, pruning, and observing
          growth create a daily mindfulness ritual that reconnects you with
          nature even in a city apartment.
        </p>
        <p>
          iLovePlantCare promotes slow, mindful plant care, focusing on
          observation, balance, and appreciation. The aim isn’t perfection but
          connection. Plants teach patience, consistency, and awareness, turning
          everyday maintenance into a peaceful routine.
        </p>

        <p>
          Whether you’re just starting your indoor garden or maintaining a lush
          plant collection, iLovePlantCare is your trusted companion. Each guide
          combines practical steps, expert research, and easy-to-follow visuals
          so you can grow confidently, one leaf at a time.
        </p>
      </section>

      <section
        id="advanced-plant-care"
        className="mx-auto max-w-7xl px-4 py-8 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Advanced Tips for Long-Term Indoor Plant Health
        </h2>
        <p>
          Once your plants have adjusted to their new environment, the next step
          is maintaining long-term vitality. Plants are living ecosystems that
          change with seasons, soil quality, and light exposure. With
          observation and a few mindful adjustments, you can keep them thriving
          year after year.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌿 Reading the Language of Leaves
        </h3>
        <p>
          Leaves are a plant’s communication system. Yellowing can indicate
          overwatering or nutrient deficiency, brown tips often mean low
          humidity, while pale new leaves may signal iron or magnesium shortage.
          Curled or drooping foliage can point to sudden temperature stress or
          compacted soil. At iLovePlantCare, we recommend keeping a simple
          journal of leaf color and watering dates to track subtle patterns that
          reveal your plant’s needs.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌤 Adjusting to Seasonal Light Shifts
        </h3>
        <p>
          As seasons change, sunlight angle and intensity shift dramatically. In
          winter, move plants closer to windows or use grow lights for 10–12
          hours of steady illumination. During summer, filter harsh sunlight
          with sheer curtains to prevent leaf burn. Rotating plants ensures
          uniform growth and prevents phototropism lean toward one side.
          Balanced light exposure supports even chlorophyll distribution and
          symmetrical foliage.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          💧 The Right Water for Your Plants
        </h3>
        <p>
          Tap water often contains chlorine, fluoride, or salts that can
          accumulate in soil over time. Sensitive species such as calatheas,
          ferns, and prayer plants prefer filtered or distilled water. Allow tap
          water to sit overnight so chlorine can evaporate before use. For
          mineral buildup, flush the soil monthly with rainwater or distilled
          water. These small changes prevent brown leaf edges and restore
          healthy root uptake.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌬 Improving Air Circulation Indoors
        </h3>
        <p>
          Stagnant air promotes mold and pests. Gentle airflow encourages
          stronger stems and healthier leaves. Keep plants a few inches apart,
          open windows when weather allows, or use a low-speed fan for
          circulation. Just ensure air doesn’t blow directly onto leaves. A
          well-ventilated room maintains balanced humidity and reduces the risk
          of mildew on soil surfaces.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌱 Eco-Friendly and Sustainable Plant Care
        </h3>
        <p>
          Sustainable plant care benefits both your home and the planet. Reuse
          nursery pots, choose biodegradable planters, and compost old soil
          instead of discarding it. Replace chemical fertilizers with organic
          compost, banana peels, or used coffee grounds, just a small layer mixed
          into soil improves microbial activity. Collect rainwater for
          irrigation whenever possible.
        </p>
        <p>
          Old leaves and trimmings can be composted to enrich future potting
          mixes. Choose peat-free soil blends to protect natural bog ecosystems
          and reduce carbon footprint. These mindful habits align perfectly with
          iLovePlantCare’s mission: caring for plants sustainably and
          respectfully.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🪴 Choosing the Right Pot and Drainage Setup
        </h3>
        <p>
          Pot selection influences root health more than most realize. Clay pots
          allow evaporation and prevent soggy soil, while plastic retains
          moisture longer. Self-watering planters work well for travelers but
          must still include an overflow hole. Always pair pots with trays to
          protect surfaces and prevent waterlogging. A layer of coarse gravel or
          perlite at the base improves drainage for moisture-sensitive plants
          like succulents and snake plants.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌸 The Role of Microbes and Mycorrhizae
        </h3>
        <p>
          Healthy soil teems with beneficial microorganisms that break down
          organic matter into nutrients. Using natural compost or mycorrhizal
          fungi inoculants supports stronger root systems and better nutrient
          absorption. Avoid sterilizing soil unnecessarily, living soil equals
          living plants.
        </p>
        <p>
          If you reuse soil, rejuvenate it with fresh compost and a pinch of
          slow-release fertilizer. This keeps the ecosystem active and prevents
          compaction or nutrient depletion over time.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🧪 Diagnosing and Reviving Unhealthy Plants
        </h3>
        <p>
          When a plant declines, start with the basics: light, water, and
          drainage. Remove yellow or damaged leaves, check for pests, and prune
          any rotted roots. If roots are mushy or smell foul, trim the damaged
          parts and replant in fresh, dry soil. Move the plant to bright,
          indirect light and mist occasionally to reduce stress. Recovery can
          take weeks, but most plants are resilient when given the right
          environment.
        </p>
        <p>
          iLovePlantCare’s recovery library includes step-by-step visual guides
          for common issues like drooping, browning, or stunted growth, ensuring
          beginners can troubleshoot confidently without panic.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🐞 Natural Pest Remedies
        </h3>
        <p>
          Neem oil, insecticidal soap, and diluted vinegar solutions can control
          most pests safely. Wiping leaves weekly removes dust and deters
          insects from nesting. Introduce beneficial predators like ladybugs in
          greenhouse setups to maintain ecological balance. Avoid synthetic
          pesticides indoors, they can harm pets and beneficial microbes.
        </p>
        <p>
          For fungus gnats, allow the top inch of soil to dry between waterings
          or sprinkle cinnamon powder as a natural antifungal barrier.
          Consistent, preventive care keeps pest populations low without harsh
          chemicals.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌾 Propagation Beyond Basics
        </h3>
        <p>
          Advanced propagation includes layering, division, and tissue culture.
          While these techniques require patience, they enable rapid
          multiplication of favorite species. Air layering, for example, allows
          large plants like rubber trees to develop roots on a stem while still
          attached, minimizing transplant shock. Dividing root clumps
          rejuvenates older spider plants and ferns, encouraging fresh growth.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌻 Indoor Plant Styling and Placement
        </h3>
        <p>
          How you arrange plants influences both aesthetics and health. Combine
          tall, structural plants like fiddle-leaf figs with trailing vines for
          visual layering. Group species with similar light and watering needs
          to simplify maintenance. Using varied pot textures, ceramic, rattan, or
          terracotta, adds warmth while keeping function at the forefront.
          Remember: beauty follows health. A well-cared-for plant always looks
          good.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🌼 The Lifecycle of Indoor Plants
        </h3>
        <p>
          All plants follow natural life cycles, growth, flowering, dormancy, and
          renewal. Understanding these phases prevents overreaction when a plant
          drops leaves in winter or pauses growth mid-year. Dormancy is rest,
          not decline. Adjust watering, reduce feeding, and let your plant
          conserve energy until spring returns. Patience ensures each new growth
          season is stronger than the last.
        </p>

        <h3 className="text-xl font-semibold text-green-900">
          🧘 The Mindful Practice of Plant Keeping
        </h3>
        <p>
          Caring for plants nurtures mindfulness, focus, and gratitude.
          Observing a new leaf unfurl or roots expand beneath soil reminds us to
          slow down. iLovePlantCare encourages daily micro-moments, watering
          mindfully, trimming consciously, and noticing small changes. These
          rituals turn plant care into meditation and transform ordinary
          routines into calm, grounding habits.
        </p>

        <p>
          Whether you live in a compact apartment or a sunlit studio, indoor
          gardening invites nature into your life. With every watered leaf and
          every cleaned pot, you create an ecosystem of growth. iLovePlantCare
          is here to guide you through every stage, from your first pothos to
          your fiftieth fern, with trusted, easy-to-follow knowledge rooted in
          nature and science.
        </p>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 py-8 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6">
          <div>
            <dt className="font-semibold text-green-900">
              What is iLovePlantCare?
            </dt>
            <dd className="mt-1">
              iLovePlantCare is a guide for plant lovers, offering practical
              care routines, environment tips, and visual references to help you
              grow healthy houseplants.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-green-900">
              Are the guides beginner-friendly?
            </dt>
            <dd className="mt-1">
              Absolutely. Each guide explains terms clearly and includes images
              or diagrams for visual learners.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-green-900">
              How often should I water my plants?
            </dt>
            <dd className="mt-1">
              It depends on the species and your home environment. We provide
              general watering intervals with visual dryness indicators to
              customize your schedule.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-green-900">
              Can I find my plant in your database?
            </dt>
            <dd className="mt-1">
              Yes, our searchable database includes hundreds of plants with care
              summaries, preferred light levels, and soil types.
            </dd>
          </div>
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-200 bg-green-50/50 py-8 text-green-800">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm">
          © {new Date().getFullYear()} iLovePlantCare , Growing knowledge, one
          leaf at a time.
        </div>
      </footer>
    </main>
  );
}
