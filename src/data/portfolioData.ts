import { CadProject, ProjectCategory, SkillGroup } from '../types/portfolio';

export const PROFILE = {
  name: 'SURJITH RAJ S',
  avatar: './assets/images/profile.jpg',
  title: 'B.Tech CSE | CAD/CAM & Automotive Design Enthusiast',
  subtitle: 'Mechanical Design Engineer  |  CNC Operator (G-Code)  |  AutoCAD & FreeCAD',
  summary:
    'Detail-oriented engineering undergraduate combining hands-on CNC machining, G-code shop-floor execution, and tolerance inspection with parametric 3D CAD modelling and automotive visualization in FreeCAD, Blender, and AutoCAD.',
  email: 'surjithraj52@gmail.com',
  phone: '+91 8220519915',
  linkedin: 'https://linkedin.com/in/surjith-raj-8a90a02b2',
  linkedinLabel: 'linkedin.com/in/surjith-raj-8a90a02b2',
  specializations: [
    '3D CAD Modelling',
    'Automotive Component Design',
    'Mechanical Product Design',
    'Reverse Engineering',
    'CAD/CAM Engineering',
    'CNC Programming Fundamentals',
  ],
};

export const PROJECT_CATEGORIES: Array<'All' | ProjectCategory> = [
  'All',
  'Automotive Component Design',
  'Mechanical Assemblies',
  'Automotive Exterior Design',
  'Automotive Interior Design',
  'Industrial Product Design',
  'Reverse Engineering',
  '3D Modelling & Rendering',
];

export const CAD_PROJECTS: CadProject[] = [
  {
    id: 'discbrake',
    title: 'Floating Wave Brake Disc Rotor Assembly',
    subtitle: 'Parametric 12-Solid Two-Piece Rotor, 7075-T6 Carrier & Titanium Bobbins',
    primaryCategory: 'Automotive Component Design',
    categories: ['Automotive Component Design', 'Mechanical Assemblies'],
    software: ['FreeCAD 1.1.3', 'PartDesign & Sketcher', 'Spreadsheet Params', 'Python Macro'],
    sourceFile: 'DISCBRAKE/DISCBRAKE_output/Floating_Wave_Brake_Rotor.FCStd',
    year: '2026',
    thumbnail: './assets/images/discbrake/hero.png',
    modelGlb: './assets/models/discbrake.glb',
    gallery: [
      {
        src: './assets/images/discbrake/hero.png',
        label: '3/4 Studio Assembly',
        caption: 'Complete 12-solid floating brake rotor assembly: stainless ring, 7075-T6 carrier, and 10 titanium bobbins.',
      },
      {
        src: './assets/images/discbrake/front.png',
        label: 'Axial Face View',
        caption: '18-lobe wave profile (320 mm OD), 20 logarithmic 35° cooling slots, and truss-pocket carrier geometry.',
      },
      {
        src: './assets/images/discbrake/side.png',
        label: 'Axial Float Profile',
        caption: 'Side profile verifying 5.0 mm rotor thickness, 1.5 mm axial carrier offset, and 16.6 mm bobbin stack.',
      },
      {
        src: './assets/images/discbrake/exploded.png',
        label: 'Exploded Sub-Assemblies',
        caption: 'Axial separation of outer wave rotor ring, 10 floating sleeve bobbins on PCD 208 mm, and inner carrier hub.',
      },
      {
        src: './assets/images/discbrake/wireframe.png',
        label: 'CAD Topology Overlay',
        caption: 'Tessellated CAD mesh topology confirming watertight surfaces across all 12 solids.',
      },
    ],
    beforeAfter: {
      title: 'CAD Topology Verification vs. Multi-Material Assembly',
      beforeLabel: 'CAD Mesh & Topology',
      beforeSrc: './assets/images/discbrake/wireframe.png',
      beforeNote: 'Watertight STL & STEP boundary verification (513k+ rotor facets inspected prior to export).',
      afterLabel: 'Multi-Material Assembly',
      afterSrc: './assets/images/discbrake/hero.png',
      afterNote: 'Stainless rotor, anodized 7075-T6 carrier hub, and 10 gold-titanium bobbins with 0.4 mm CNC edge breaks.',
    },
    description:
      'Spreadsheet-driven parametric 320 mm floating wave brake disc rotor built in FreeCAD 1.1.3 with full STEP/STL validation and CNC machining edge-break notes.',
    designObjectives: [
      'Separate thermal expansion of the outer stainless braking track from the inner aluminium hub using 10 floating bobbins.',
      'Reduce unsprung and rotational inertia via 10+10 radiused truss pockets on the 7075-T6 carrier.',
      'Maintain 100% parametric constraint lock (40/40 sketches fully constrained) and watertight manufacturing exports.',
    ],
    engineeringConcepts: [
      'Two-piece floating rotor thermal decoupling (1.5 mm axial offset)',
      'Logarithmic spiral slot geometry (35° tangent) for pad wiping & gas evacuation',
      'Polar pattern symmetry, counterbored hub bolting (PCD 110 mm), and CNC edge-break chamfers',
    ],
    technicalFeatures: [
      '320 mm nominal OD (323.54 mm peak wave envelope) with 18-lobe periodic B-spline perimeter (±2.25 mm amplitude)',
      '20 swept 3.2 mm cooling slots + 10 chamfered Ø2.5 mm vent holes on PCD 266 mm + 0.4 mm thermal expansion wave groove',
      'Verified 12 valid solids (309,156.48 mm³ assembly volume) exported to Assembly.step and watertight STL meshes',
    ],
    myContribution:
      'Authored the parametric spreadsheet architecture, PartDesign feature sequence, CNC edge-break specifications, and independent STEP/STL verification checks.',
    specs: [
      { label: 'Outer Envelope', value: '323.54 × 323.54 × 16.6 mm' },
      { label: 'Assembly Volume', value: '309,156.48 mm³ (12 solids)' },
      { label: 'Rotor Thickness', value: '5.0 mm (Stainless)' },
      { label: 'Carrier Hub', value: '6.5 mm (7075-T6 Alu, Ø94 bore)' },
      { label: 'Bobbin Pitch Circle', value: '10 × Ø16 mm on PCD 208 mm' },
      { label: 'Sketch Constraints', value: '40 / 40 Fully Constrained' },
    ],
  },
  {
    id: 'vx01-formula',
    title: 'VX-01 Aeroform Formula Concept',
    subtitle: 'Full-Scale Single-Seater Chassis, Aerodynamics, Suspension & Cockpit Package',
    primaryCategory: 'Automotive Exterior Design',
    categories: ['Automotive Exterior Design', 'Automotive Interior Design', 'Mechanical Assemblies'],
    software: ['FreeCAD 1.1.3', 'Part Workbench', 'Master Parameter Sheet'],
    sourceFile: 'SPORTS CAR/VX01_Formula_Concept.FCStd',
    year: '2026',
    isSubsystemHighlight: true,
    subsystemNote:
      'Includes the _06_COCKPIT driver cell (canopy, tub liner, contoured seat, steering wheel with twin grips, headrests, and helmet clearance envelope) integrated inside the full formula vehicle CAD model.',
    thumbnail: './assets/images/vx01-formula/hero.png',
    modelGlb: './assets/models/vx01-formula.glb',
    gallery: [
      {
        src: './assets/images/vx01-formula/hero.png',
        label: '3/4 Front Aero View',
        caption: 'VX-01 Formula Concept (5200 × 2000 × 1050 mm) featuring 3-element front wing, cyan nose tip, and undercut sidepods.',
      },
      {
        src: './assets/images/vx01-formula/side.png',
        label: 'Side Elevation',
        caption: '3200 mm wheelbase packaging, sharkfin engine cover, bargeboards, and 50 mm ground clearance.',
      },
      {
        src: './assets/images/vx01-formula/top.png',
        label: 'Planform View',
        caption: '1900 mm front wing span, coke-bottle rear taper, sidepod cooling louvres, and rear wing layout.',
      },
      {
        src: './assets/images/vx01-formula/rear.png',
        label: 'Rear Diffuser & DRS',
        caption: 'Rear wing with DRS actuator, endplate louvres, rain light, central exhaust, and straked Venturi diffuser.',
      },
      {
        src: './assets/images/vx01-formula/chassis_cockpit.png',
        label: 'Cockpit & Pushrod Packaging',
        caption: 'Body shells hidden to expose _06_COCKPIT driver cell, _05_SUSPENSION double wishbones/pushrods, and _07_UNDERBODY.',
      },
    ],
    beforeAfter: {
      title: 'Internal Chassis & Cockpit vs. Complete Aero Bodywork',
      beforeLabel: 'Chassis, Suspension & Cockpit',
      beforeSrc: './assets/images/vx01-formula/chassis_cockpit.png',
      beforeNote: 'Internal driver cockpit cell, pushrod double-wishbone suspension, brake assemblies, and Venturi floor.',
      afterLabel: 'Full Aero Bodywork',
      afterSrc: './assets/images/vx01-formula/hero.png',
      afterNote: 'Complete monocoque, sidepods, engine cover, bargeboards, and multi-element wings attached.',
    },
    description:
      '131-part single-seater formula race car CAD assembly driven by a master parameter sheet across 7 structured vehicle subsystems.',
    designObjectives: [
      'Organize a complete open-wheel concept vehicle into modular subsystem groups for rapid parametric updates.',
      'Integrate front/rear multi-element aerodynamics, Venturi floor strakes, and pushrod double-wishbone suspension around a 3200 mm wheelbase.',
      'Validate driver cockpit packaging, steering wheel reach, canopy clearance, and mirror sightlines.',
    ],
    engineeringConcepts: [
      'Ground-effect Venturi underbody floor with edge fences and diffuser strakes',
      'Pushrod-actuated double-wishbone suspension kinematics & wheel-hub brake packaging',
      'Ergonomic cockpit driver cell packaging (tub liner, seat, steering wheel, headrests)',
    ],
    technicalFeatures: [
      '131 solid Part::Feature components organized across _01_BODY through _07_UNDERBODY',
      'Master dimensions: 5200 mm length, 2000 mm width, 1050 mm height, 50 mm ride height',
      'Front tyres 720×305 mm / Rear tyres 730×405 mm on Ø460 mm centre-lock rims with discs & calipers',
    ],
    myContribution:
      'Structured the parametric vehicle assembly tree, subsystem packaging dimensions, aerodynamic wing/diffuser modeling, and suspension/cockpit integration.',
    specs: [
      { label: 'Overall L × W × H', value: '5200 × 2000 × 1050 mm' },
      { label: 'Wheelbase / Clearance', value: '3200 mm / 50 mm' },
      { label: 'Track (Front / Rear)', value: '1695 mm / 1565 mm' },
      { label: 'Front / Rear Wing Width', value: '1900 mm / 850 mm' },
      { label: 'Solid Components', value: '131 parts (7 subsystems)' },
      { label: 'Tyre Package', value: 'F: Ø720×305 | R: Ø730×405 mm' },
    ],
  },
  {
    id: 'buggy-22',
    title: 'Buggy 22 — Off-Road Spaceframe & Vehicle',
    subtitle: 'FreeCAD Parametric Tubular Chassis + Blender Studio PBR Visualization',
    primaryCategory: 'Automotive Exterior Design',
    categories: [
      'Automotive Exterior Design',
      'Automotive Interior Design',
      'Mechanical Assemblies',
      '3D Modelling & Rendering',
    ],
    software: ['FreeCAD 1.1.3', 'Blender 5.2 (EEVEE)', 'PBR Materials'],
    sourceFile: 'BUGGY CAR/Buggy_22.FCStd & Buggy_22.blend',
    year: '2026',
    isSubsystemHighlight: true,
    subsystemNote:
      'Features a dedicated COCKPIT & SAFETY assembly inside the vehicle: dashboard fascia, 3 analog gauges, switches, bucket seat, 4-point red harness, steering rack/column/wheel, pedal box, fire extinguisher, and window net.',
    thumbnail: './assets/images/buggy-22/hero.png',
    modelGlb: './assets/models/buggy-22.glb',
    gallery: [
      {
        src: './assets/images/buggy-22/hero.png',
        label: 'Studio Isometric Render',
        caption: 'Completed Buggy 22 studio visualization in Blender 5.2 EEVEE with graphite body panels, carbon trim, and off-road tyres.',
      },
      {
        src: './assets/images/buggy-22/chassis.png',
        label: 'Bare Tubular Spaceframe',
        caption: 'Built-in CAM_Chassis camera showing the 45/38/32 mm DOM tubular chassis, roll cage, engine block, and coilover suspension.',
      },
      {
        src: './assets/images/buggy-22/exploded.png',
        label: 'Exploded Vehicle Architecture',
        caption: 'Built-in CAM_Exploded view separating body panels, roll cage, suspension arms, drivetrain, and wheels.',
      },
      {
        src: './assets/images/buggy-22/cockpit.png',
        label: 'Cockpit & Instrumentation',
        caption: 'Close-up of dashboard switches, 3-dial gauge cluster, bucket seat, red racing harness, and steering wheel.',
      },
      {
        src: './assets/images/buggy-22/front.png',
        label: 'Front Suspension Track',
        caption: 'Front elevation displaying double A-arm travel, coilover springs, steering tie rods, and 1520 mm front track.',
      },
      {
        src: './assets/images/buggy-22/rear.png',
        label: 'Rear Drivetrain & Exhaust',
        caption: 'Rear view showcasing trailing-arm rear suspension, engine cooling/exhaust layout, and 1560 mm rear track.',
      },
    ],
    beforeAfter: {
      title: 'Tubular Chassis Architecture vs. Final Studio Bodywork',
      beforeLabel: 'Spaceframe & Mechanicals',
      beforeSrc: './assets/images/buggy-22/chassis.png',
      beforeNote: 'Exposed structural tubular roll cage (Ø45/38/32 mm), double A-arm front & trailing-arm rear suspension, and powertrain.',
      afterLabel: 'Finished Studio Render',
      afterSrc: './assets/images/buggy-22/hero.png',
      afterNote: 'Complete exterior bodywork, rear cooling louvres, cockpit instrumentation, and 28-material PBR studio lighting.',
    },
    description:
      'End-to-end CAD-to-visualization off-road buggy engineered in FreeCAD with 92 parametric parts and refined into a 652-mesh studio asset in Blender.',
    designObjectives: [
      'Design a rigid tubular roll-cage spaceframe around a 2100 mm wheelbase using standard 45/38/32 mm tube sections.',
      'Package long-travel front double wishbones, rear trailing arms, rack-and-pinion steering, and rear-mid engine drivetrain.',
      'Translate CAD geometry into a clean studio-lit Blender showcase with exploded, chassis, and cockpit inspection cameras.',
    ],
    engineeringConcepts: [
      'Tubular spaceframe structural triangulation & roll-over protection geometry',
      'Front double-wishbone & rear trailing-arm suspension packaging with disc brakes',
      'Driver cockpit ergonomics, dashboard instrumentation, and motorsport safety restraint layout',
    ],
    technicalFeatures: [
      '2775 × 1830 × 1422 mm overall envelope; 2100 mm wheelbase; F/R track 1520 / 1560 mm',
      '92 FreeCAD parts across 10 App::Part sub-assemblies driven by Buggy 22 Parameters spreadsheet',
      '652 meshes, 28 PBR materials, and 8 multi-angle studio cameras in Buggy_22.blend',
    ],
    myContribution:
      'Built the parametric CAD vehicle sub-assemblies in FreeCAD and executed the Blender PBR material shading, cockpit detailing, and multi-camera studio lighting.',
    specs: [
      { label: 'L × W × H', value: '2775 × 1830 × 1422 mm' },
      { label: 'Wheelbase', value: '2100 mm (Track F:1520 / R:1560)' },
      { label: 'Roll Cage Tubing', value: 'Ø45 / Ø38 / Ø32 mm' },
      { label: 'Tyres (Front / Rear)', value: 'Ø680×220 / Ø720×270 mm' },
      { label: 'CAD Sub-Assemblies', value: '92 parts / 10 groups' },
      { label: 'Blender Scene', value: '652 meshes, 28 PBR mats' },
    ],
  },
  {
    id: 'car-engine',
    title: '2.0 L Inline-Four DOHC 16-Valve Engine',
    subtitle: 'Cutaway Powertrain Assembly — Block, Rotating Internals, Induction & Exhaust',
    primaryCategory: 'Mechanical Assemblies',
    categories: ['Mechanical Assemblies', 'Automotive Component Design'],
    software: ['FreeCAD 1.1.3', 'Part Workbench', 'Spreadsheet Specs'],
    sourceFile: 'CAR ENGINE/Car_Engine.FCStd',
    year: '2026',
    thumbnail: './assets/images/car-engine/hero_open.png',
    modelGlb: './assets/models/car-engine.glb',
    gallery: [
      {
        src: './assets/images/car-engine/hero_open.png',
        label: 'Cutaway Internals Exposed',
        caption: 'Cutaway block window opened (per CAD display note) revealing 4 pistons, wrist pins, connecting rods, and forged crankshaft.',
      },
      {
        src: './assets/images/car-engine/closed.png',
        label: 'Sealed Block Assembly',
        caption: 'Cutaway window cover and 14 mounting bolts installed for full external engine packaging.',
      },
      {
        src: './assets/images/car-engine/internals.png',
        label: 'Rotating Assembly Isolated',
        caption: '86 × 86 mm square-bore pistons, wrist pins, 160 mm con-rods, forged crankshaft (1-3-4-2 order), and lightened flywheel.',
      },
      {
        src: './assets/images/car-engine/front_timing.png',
        label: 'Front Accessory Drive',
        caption: 'Serpentine belt routing across crankshaft pulley, water pump pulley, and alternator pulley.',
      },
      {
        src: './assets/images/car-engine/exhaust_side.png',
        label: 'Exhaust Header & Flywheel',
        caption: '4-into-1 tubular exhaust header runners, collector downpipe, flywheel ring gear, and rear main cover.',
      },
    ],
    beforeAfter: {
      title: 'Sealed Engine Block vs. Cutaway Internals Exposed',
      beforeLabel: 'Cutaway Cover Closed',
      beforeSrc: './assets/images/car-engine/closed.png',
      beforeNote: 'External block assembly with bolted cutaway inspection cover in place.',
      afterLabel: 'Cutaway Cover Removed',
      afterSrc: './assets/images/car-engine/hero_open.png',
      afterNote: 'Cutaway cover hidden to inspect crankshaft throws, 160 mm connecting rods, and 86 mm pistons.',
    },
    description:
      'Conceptual 1998 cc inline-four DOHC engine assembly modeled in FreeCAD across 6 mechanical subsystems with an interactive cutaway inspection window.',
    designObjectives: [
      'Model a complete multi-subsystem 2.0 L inline-four conceptual powertrain with realistic geometric proportions.',
      'Incorporate a removable cutaway block flange and cover to inspect internal piston-crank kinematics.',
      'Maintain clean axial spacing (100 mm cylinder pitch) and full fastener detailing across covers and pans.',
    ],
    engineeringConcepts: [
      'Square-engine architecture (86 mm bore × 86 mm stroke, 1998 cc, 1-3-4-2 firing order)',
      'Slider-crank kinematics (160 mm connecting rod length at 30° crank display angle)',
      'Sub-assembly grouping: Core Engine, Rotating Assembly, Induction/Fuel, Exhaust, Front Accessories, Ignition',
    ],
    technicalFeatures: [
      '56 Part::Feature solid components inside 6 structured assembly groups (~592 × 416 × 624 mm)',
      'Multi-layer head gasket, 16-valve cylinder head, DOHC valve cover, deep sump oil pan, and timing cover',
      'Complete bolt arrays (14 cutaway bolts, 10 head bolts, 10 valve cover bolts, 16 oil pan bolts, 12 timing bolts)',
    ],
    myContribution:
      'Assembled the multi-group powertrain architecture, Engine Specification spreadsheet, cutaway inspection window feature, and accessory drive layout.',
    specs: [
      { label: 'Configuration', value: 'Inline-4, DOHC, 16-Valve' },
      { label: 'Displacement', value: '1998 cc (86 × 86 mm)' },
      { label: 'Con-Rod / Spacing', value: '160 mm / 100 mm pitch' },
      { label: 'Firing Order', value: '1-3-4-2 (30° display)' },
      { label: 'Envelope (L×W×H)', value: '592 × 416 × 624 mm' },
      { label: 'Assembly Parts', value: '56 solid components' },
    ],
  },
  {
    id: 'engine-2s',
    title: '2-Stroke Single-Cylinder Engine Cutaway',
    subtitle: 'Air-Cooled Finned Cylinder, Reed Valve Intake & Crankcase Assembly',
    primaryCategory: 'Mechanical Assemblies',
    categories: ['Mechanical Assemblies', 'Automotive Component Design'],
    software: ['FreeCAD 1.1.3', 'Part Workbench'],
    sourceFile: 'ENGINE_2S/engine_2s.FCStd',
    year: '2026',
    thumbnail: './assets/images/engine-2s/hero.png',
    modelGlb: './assets/models/engine-2s.glb',
    gallery: [
      {
        src: './assets/images/engine-2s/hero.png',
        label: 'Isometric Cutaway',
        caption: 'Sectioned single-cylinder air-cooled two-stroke assembly showing finned barrel, cylinder liner, piston, and crankcase.',
      },
      {
        src: './assets/images/engine-2s/section.png',
        label: 'Internal Port & Piston Section',
        caption: 'Direct section view across piston crown, dual compression rings, wrist pin, connecting rod, and crankshaft webs.',
      },
      {
        src: './assets/images/engine-2s/rear_carb.png',
        label: 'Reed Valve & Ignition Rotor',
        caption: 'Rear/intake perspective highlighting carburettor, dual-petal reed cage, copper ignition rotor, and primary drive gear.',
      },
      {
        src: './assets/images/engine-2s/wireframe.png',
        label: 'CAD Mesh Topology',
        caption: 'Wireframe topology inspection across cooling fins, reed petals, and rotating assembly.',
      },
    ],
    beforeAfter: {
      title: 'CAD Wireframe Topology vs. Sectioned PBR Cutaway',
      beforeLabel: 'Wireframe Inspection',
      beforeSrc: './assets/images/engine-2s/wireframe.png',
      beforeNote: 'Edge and mesh tessellation check across cylinder cooling fins and sectioned sleeve.',
      afterLabel: 'Shaded Cutaway Assembly',
      afterSrc: './assets/images/engine-2s/hero.png',
      afterNote: 'Material-differentiated cutaway showing cast aluminium, steel liner/piston, ceramic spark plug, and copper stator.',
    },
    description:
      '19-component sectioned 2-stroke single-cylinder engine model showcasing reed-valve induction, finned heat rejection, and full crankshaft-to-piston clearance.',
    designObjectives: [
      'Visualize internal two-stroke scavenging and crankcase compression geometry via a clean longitudinal cutaway.',
      'Model all 19 distinct mechanical, electrical, and induction sub-parts with realistic concentric clearances.',
    ],
    engineeringConcepts: [
      'Two-stroke crankcase reed-valve induction with dual flexible reed petals',
      'Air-cooled finned cylinder block & head thermal dissipation geometry',
      'Crankshaft web, wrist pin, piston ring grooves, and primary gear drive alignment',
    ],
    technicalFeatures: [
      '19 solid components: block, head, liner, piston, rings, wristpin, rod, crank, webs, discs, rotor, gear, case, reed, petals, carb, exhaust, plug, ceramic',
      'Compact 156 × 186 × 259 mm overall packaging envelope',
      'Dedicated ceramic insulator + spark plug electrode seated in finned cylinder head',
    ],
    myContribution:
      'Modeled the sectioned engine assembly, reed-valve intake petals, finned barrel, and internal rotating/reciprocating components in FreeCAD.',
    specs: [
      { label: 'Envelope (X×Y×Z)', value: '156 × 186 × 259 mm' },
      { label: 'Total Parts', value: '19 distinct solids' },
      { label: 'Induction System', value: 'Carburettor + Dual-Petal Reed' },
      { label: 'Cooling Type', value: 'Air-Cooled Finned Block/Head' },
      { label: 'Block Volume', value: '142,976.15 mm³' },
      { label: 'Crankcase Volume', value: '687,030.91 mm³' },
    ],
  },
  {
    id: 'farview-spring',
    title: 'Farview Helical Torsion Spring & TechDraw',
    subtitle: 'Parametric Spring Steel Component & Dimensioned 1:1 Engineering Drawing',
    primaryCategory: 'Industrial Product Design',
    categories: ['Industrial Product Design', 'Automotive Component Design', 'Reverse Engineering'],
    software: ['FreeCAD 1.1.3', 'TechDraw & Spreadsheet', 'Matplotlib Drawing Export'],
    sourceFile: 'SPRING/Farview_Spring.FCStd & Farview_Spring_Drawing.pdf',
    year: '2026',
    thumbnail: './assets/images/farview-spring/hero.png',
    modelGlb: './assets/models/farview-spring.glb',
    gallery: [
      {
        src: './assets/images/farview-spring/hero.png',
        label: 'Polished Spring Steel 3D',
        caption: 'Continuous Ø5.00 mm spring steel torsion coil (7 active turns, Ø32.00 mm OD) modeled in FreeCAD.',
      },
      {
        src: './assets/images/farview-spring/side.png',
        label: 'Asymmetric Hook Profile',
        caption: 'Side profile showing the 100 mm left U-hook (R12) and 110 mm extended right upward hook (R15).',
      },
      {
        src: './assets/images/farview-spring/drawing.png',
        label: '1:1 Engineering Drawing (Rev A)',
        caption: 'Complete orthographic + isometric production drawing sheet (Farview_Spring_Drawing.pdf) with dimensions & notes.',
      },
    ],
    beforeAfter: {
      title: '2D Orthographic Blueprint vs. 3D Parametric Spring Solid',
      beforeLabel: 'Engineering Drawing (Rev A)',
      beforeSrc: './assets/images/farview-spring/drawing.png',
      beforeNote: 'Scale 1:1 orthographic Front, Top, Side & Isometric projections with full dimensional specification block.',
      afterLabel: '3D Spring Steel Solid',
      afterSrc: './assets/images/farview-spring/hero.png',
      afterNote: 'Continuous swept Ø5.00 mm wire solid (10,689.25 mm³) generated from the editable Parameters sheet.',
    },
    description:
      'Industrial helical torsion spring modeled directly from dimensional specifications and paired with a 1:1 multi-view engineering drawing — aligned with shop-floor steel & spring manufacturing practice.',
    designObjectives: [
      'Translate physical spring coil geometry (wire diameter, pitch, turns, asymmetric hook arms) into an editable FreeCAD spreadsheet model.',
      'Produce an unambiguous 1:1 engineering drawing with Front, Top, Side, and Isometric views plus manufacturing notes.',
    ],
    engineeringConcepts: [
      'Helical torsion spring geometry (mean coil Ø27.0 mm, spring index C = 5.4, pitch 6.0 mm)',
      'Continuous circular-section wire sweep across transition bends and dual hook radii',
      'Shop-floor drawing standards, dimensional inspection callouts, and physical sample verification notes',
    ],
    technicalFeatures: [
      'Wire Ø5.00 mm | Coil OD Ø32.00 mm | Mean Ø27.00 mm | ID Ø22.00 mm | 7 turns | Coil height 42.00 mm',
      'Left arm 100.00 mm (U-shaped upward hook R12) & Right arm 110.00 mm (extended upward hook R15)',
      'Includes editable Spreadsheet::Sheet ("Parameters"), FreeCAD TechDraw page, and SVG/PDF Rev A sheet',
    ],
    myContribution:
      'Captured parametric coil & arm rules, built the FreeCAD solid and TechDraw views, and generated the Rev A manufacturing specification sheet.',
    specs: [
      { label: 'Wire / Coil OD', value: 'Ø5.00 mm / Ø32.00 mm' },
      { label: 'Turns / Pitch', value: '7 turns / 6.00 mm pitch' },
      { label: 'Coil Height', value: '42.00 mm' },
      { label: 'Arm Lengths', value: 'L: 100 mm (R12) | R: 110 mm (R15)' },
      { label: 'Material & Finish', value: 'Spring Steel / Polished Silver' },
      { label: 'Solid Volume', value: '10,689.25 mm³' },
    ],
  },
  {
    id: 'bearing-pedestal',
    title: 'Bearing Pedestal Mounting Bracket',
    subtitle: 'Measured Machined Clevis Support & Surface Area Metrology Verification',
    primaryCategory: 'Reverse Engineering',
    categories: ['Reverse Engineering', 'Industrial Product Design', 'Automotive Component Design'],
    software: ['FreeCAD 1.1.3', 'Part Workbench', 'Area Metrology'],
    sourceFile: 'BEARING/bearing_pedestal.FCStd',
    year: '2026',
    thumbnail: './assets/images/bearing-pedestal/hero.png',
    modelGlb: './assets/models/bearing-pedestal.glb',
    gallery: [
      {
        src: './assets/images/bearing-pedestal/hero.png',
        label: '3/4 Isometric Solid',
        caption: 'Machined steel bearing pedestal clevis bracket (80 × 80 × 170 mm) with filleted flange base and dual mounting bores.',
      },
      {
        src: './assets/images/bearing-pedestal/front.png',
        label: 'Clevis Elevation',
        caption: 'Coaxial upper clevis bearing ears, stepped vertical column, and base transition.',
      },
      {
        src: './assets/images/bearing-pedestal/top.png',
        label: 'Base Footprint & Bores',
        caption: 'Top-down perspective inspecting corner radii and symmetric twin base fastener bores.',
      },
      {
        src: './assets/images/bearing-pedestal/wireframe.png',
        label: 'Geometry & Face Topology',
        caption: 'Wireframe inspection highlighting planar/cylindrical transitions and measured bearing faces.',
      },
    ],
    beforeAfter: {
      title: 'Measured Edge Topology vs. Machined Solid Bracket',
      beforeLabel: 'Measured Topology',
      beforeSrc: './assets/images/bearing-pedestal/wireframe.png',
      beforeNote: 'CAD face boundary and bore-alignment verification with embedded 5.46 cm² & 12.39 cm² area checks.',
      afterLabel: 'Machined Steel Solid',
      afterSrc: './assets/images/bearing-pedestal/hero.png',
      afterNote: 'Validated single-solid C45 steel pedestal bracket (315,061.05 mm³) ready for drafting & CNC machining.',
    },
    description:
      'Reverse-engineered bearing pedestal clevis bracket modeled to measured shop-floor dimensions (80 × 80 × 170 mm) with integrated FreeCAD surface-area checks.',
    designObjectives: [
      'Reconstruct a rigid clevis-type bearing support bracket from physical envelope measurements and bore requirements.',
      'Verify contact and bearing face surface areas (5.46 cm² and 12.39 cm²) directly inside the FreeCAD model.',
    ],
    engineeringConcepts: [
      'Dimensional reverse engineering from caliper/micrometer measurements into watertight B-rep CAD',
      'Coaxial clevis lug alignment, stepped column stiffness, and filleted base stress relief',
      'Surface-area metrology verification for bearing load distribution',
    ],
    technicalFeatures: [
      'Compact 80.0 × 80.0 × 170.0 mm envelope with 315,061.05 mm³ verified single solid volume',
      'Embedded FreeCAD Measure::MeasureArea annotations (5.46 cm² and 12.39 cm² contact faces)',
      'Symmetric twin base mounting bores with corner blend radii for CNC fixture mounting',
    ],
    myContribution:
      'Modeled the complete single-solid pedestal geometry and performed surface-area verification measurements in FreeCAD.',
    specs: [
      { label: 'Overall Envelope', value: '80.0 × 80.0 × 170.0 mm' },
      { label: 'Solid Volume', value: '315,061.05 mm³' },
      { label: 'Measured Areas', value: '5.46 cm² & 12.39 cm²' },
      { label: 'Solid Validity', value: '1 Valid Closed Solid' },
      { label: 'CAD Workbench', value: 'FreeCAD Part + Measure' },
    ],
  },
  {
    id: 'shield-os-tbm',
    title: 'SHIELD OS — 8.4 m Tunnel Boring Machine',
    subtitle: 'Full-Scale EPB TBM Assembly, Cutterhead, Thrust System & Backup Gantry',
    primaryCategory: 'Industrial Product Design',
    categories: ['Industrial Product Design', 'Mechanical Assemblies', '3D Modelling & Rendering'],
    software: ['Blender 5.2 (EEVEE)', 'Python bpy Automation', 'Keyframed Rigging'],
    sourceFile: 'TUNNELING/SHIELD_OS_TBM.blend',
    year: '2026',
    thumbnail: './assets/images/shield-os-tbm/hero.png',
    modelGlb: './assets/models/shield-os-tbm.glb',
    gallery: [
      {
        src: './assets/images/shield-os-tbm/hero.png',
        label: 'Wide Tunnel Cutaway (CAM_05)',
        caption: '8.4 m Earth Pressure Balance TBM operating inside segmental concrete tunnel lining.',
      },
      {
        src: './assets/images/shield-os-tbm/cutterhead.png',
        label: 'Cutterhead & Disc Cutters (CAM_01)',
        caption: 'Front shield face displaying spoke openings, roller disc cutters, and rock excavation face.',
      },
      {
        src: './assets/images/shield-os-tbm/side.png',
        label: 'Longitudinal Profile (CAM_02)',
        caption: 'Full side view from cutterhead and main drive through hydraulic thrust jacks to backup gantry.',
      },
      {
        src: './assets/images/shield-os-tbm/interior.png',
        label: 'Control Cabin & Gantry (CAM_03)',
        caption: 'Backup gantry interior featuring operator control cabin, dual screens, electrical cabinets, and belt conveyor.',
      },
      {
        src: './assets/images/shield-os-tbm/lining.png',
        label: 'Segmental Lining Erector (CAM_04)',
        caption: 'Ring erector arm placing precast concrete lining segments (4.02 m OD / 3.70 m ID).',
      },
    ],
    beforeAfter: {
      title: 'Cutterhead Excavation Face vs. Full TBM Tunnel System',
      beforeLabel: 'Cutterhead Subsystem',
      beforeSrc: './assets/images/shield-os-tbm/cutterhead.png',
      beforeNote: 'CAM_01_CUTTERHEAD focused on Ø8.62 m rotating cutterhead face, spokes, and disc cutters.',
      afterLabel: 'Complete Tunnel Operation',
      afterSrc: './assets/images/shield-os-tbm/hero.png',
      afterNote: 'CAM_05_WIDE integrating shield, thrust jacks, muck conveyor, erector, gantry, and lined strata.',
    },
    description:
      'Procedurally built and animated 8.4 m diameter Earth Pressure Balance (EPB) Tunnel Boring Machine in Blender 5.2 featuring 893 meshes across 13 engineering collections.',
    designObjectives: [
      'Model a realistic multi-zone EPB TBM assembly spanning cutterhead, main drive, thrust cylinders, muck haulage, and gantry.',
      'Build a multi-camera industrial visualization with an animated 720-frame boring cycle and telemetry HUD.',
    ],
    engineeringConcepts: [
      'EPB shield tunnelling architecture (cutterhead overcut Ø8.62 m, shield OD Ø8.32 m, precast ring lining)',
      'Hydraulic thrust jack ring, screw/belt muck conveyance, and vacuum segment erector packaging',
      'Procedural Blender Python (bpy) generation with hierarchical collections and 44 PBR/emissive materials',
    ],
    technicalFeatures: [
      '893 mesh objects across 13 collections (00_TBM_Structure through 11_HUD) spanning 102.6 m tunnel scene',
      '5 built-in engineering cameras (Cutterhead, Side, Interior, Lining, Wide) + 33 tunnel/machine lights',
      'Embedded shield_os_tbm.py generator script + baked 30 fps machine cycle keyframes',
    ],
    myContribution:
      'Created the procedural Blender Python build, subsystem collection hierarchy, PBR/HUD shader setup, and 5-camera industrial render views.',
    specs: [
      { label: 'Bore / Shield Dia.', value: 'Ø8.80 m / Ø8.32 m' },
      { label: 'Scene Scale', value: '17.3 × 102.6 × 17.3 m' },
      { label: 'Mesh Objects', value: '893 meshes (44 materials)' },
      { label: 'Subsystems', value: '8 TBM + Tunnel + HUD' },
      { label: 'Precast Ring Pitch', value: '1.222 m (1.20 m + 22 mm)' },
    ],
  },
  {
    id: 'house',
    title: 'Modern Two-Storey Residence & Interiors',
    subtitle: 'Architectural Massing, Interior Design, Lighting & Proof-to-Preview Visualization',
    primaryCategory: '3D Modelling & Rendering',
    categories: ['3D Modelling & Rendering'],
    software: ['Blender 5.2 (EEVEE GI)', 'PBR Texturing', 'Multi-Camera ArchViz'],
    sourceFile: 'HOUSE CONSTRUCTION/HOUSE/model/house_design.blend',
    year: '2026',
    thumbnail: './assets/images/house/hero.png',
    modelGlb: './assets/models/house-design.glb',
    gallery: [
      {
        src: './assets/images/house/hero.png',
        label: 'Hero Exterior (Final)',
        caption: 'Final EEVEE render showcasing stone/wood cladding, glass balcony balustrades, and carport vehicle.',
      },
      {
        src: './assets/images/house/aerial.png',
        label: 'Aerial Perspective',
        caption: 'Elevated architectural view showing L-shaped upper terrace, roof AC/water-tank utilities, and site boundary.',
      },
      {
        src: './assets/images/house/front_right.png',
        label: 'Front-Right Elevation',
        caption: 'Compound gate, landscaped garden walkway, LED bollards, and entry facade lighting.',
      },
      {
        src: './assets/images/house/living.png',
        label: 'Living Room Interior',
        caption: 'Furnished living space with media console, accent armchair, coffee table, glazing, and warm interior GI.',
      },
      {
        src: './assets/images/house/kitchen.png',
        label: 'L-Shaped Modular Kitchen',
        caption: 'Taupe cabinetry with brass handles, quartz counter, range hood, sink, and twin daylight windows.',
      },
      {
        src: './assets/images/house/bedroom.png',
        label: 'Master Bedroom Suite',
        caption: 'Upholstered headboard, bedside lamps, framed wall art, timber flooring, and exterior terrace view.',
      },
      {
        src: './assets/images/house/terrace.png',
        label: 'Upper Terrace Lounge',
        caption: 'Outdoor lounge chairs, side table, glass railings, and slatted stone column details.',
      },
      {
        src: './assets/images/house/proof_test_low.png',
        label: 'Early Proof Render Pass',
        caption: 'Early low-sample proof render saved during lighting, glazing reflection, and foliage iteration.',
      },
    ],
    beforeAfter: {
      title: 'Early Proof Render Pass vs. Final EEVEE GI Showcase',
      beforeLabel: 'Early Proof Pass (proof/test_low)',
      beforeSrc: './assets/images/house/proof_test_low.png',
      beforeNote: 'Initial geometry proof pass with noisy glass shader, unsmoothed foliage, and flat ambient lighting.',
      afterLabel: 'Final Preview Render (preview/hero)',
      afterSrc: './assets/images/house/hero.png',
      afterNote: 'Refined EEVEE GI bounce lighting, clean transparent glass balustrades, smooth foliage, and facade textures.',
    },
    description:
      'Complete 2,484-mesh architectural and interior 3D scene built in Blender 5.2 with 78 PBR materials, 31 lights, and documented proof-to-preview rendering progression.',
    designObjectives: [
      'Deliver a cohesive exterior + interior residential visualization with furnished living, kitchen, dining, bedroom, and terrace spaces.',
      'Iteratively refine EEVEE global illumination, glass reflections, and PBR surface roughness from early proof passes to final preview renders.',
    ],
    engineeringConcepts: [
      'Hierarchical scene collection management (Architecture, Roof, Furniture, Interiors, Landscape, Lighting, Vehicles)',
      'Layered architectural lighting (31 interior pendants, portal fills, porch bulbs, and sun sky rig)',
      'Material calibration across quartz, brass, timber slats, fabric upholstery, and architectural glazing',
    ],
    technicalFeatures: [
      '2,484 mesh objects and 78 authored PBR materials across a 60 × 60 × 8.01 m site envelope',
      '9 dedicated production cameras covering exterior elevations, aerial massing, and interior rooms',
      'Preserved proof vs. preview render sets demonstrating iterative visual quality progression',
    ],
    myContribution:
      'Authored the complete Blender architectural & interior scene, PBR shaders, multi-room lighting rig, and all 9 camera renders.',
    specs: [
      { label: 'Site Envelope', value: '60.0 × 60.0 × 8.01 m' },
      { label: 'Mesh Objects', value: '2,484 meshes' },
      { label: 'PBR Materials', value: '78 authored materials' },
      { label: 'Scene Lights', value: '31 interior & exterior lights' },
      { label: 'Render Cameras', value: '9 production cameras' },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'cad-software',
    title: 'CAD Software & Modeling',
    subtitle: 'Parametric B-Rep & 2D Drafting',
    iconKey: 'cad',
    items: [
      {
        name: 'FreeCAD (Sketcher, PartDesign, Part, TechDraw)',
        context: 'Constraint-driven 3D solid modeling, Spreadsheet parameter tables, multi-part assemblies, and STEP/STL validation.',
        tag: 'Core CAD',
      },
      {
        name: 'AutoCAD',
        context: '2D engineering drafting, orthographic projections, dimensioning, and design support for steel & spring components.',
        tag: 'Working Knowledge',
      },
      {
        name: 'CAD Modelling',
        context: 'Parametric master sketches, Boolean solid operations, PolarPatterns, fillets/chamfers, and watertight mesh verification.',
      },
    ],
  },
  {
    id: 'viz-blender',
    title: '3D Visualization & Rendering',
    subtitle: 'Blender 5.x PBR & Studio Lighting',
    iconKey: 'render',
    items: [
      {
        name: 'Blender & Python (bpy)',
        context: 'Hard-surface & architectural modeling, Principled BSDF materials, EEVEE studio/interior lighting, and GLB export.',
        tag: '3D Viz',
      },
      {
        name: '3D Visualization',
        context: 'Exploded assembly framing, cutaway renders, multi-camera setups, and proof-to-preview lighting iteration.',
      },
    ],
  },
  {
    id: 'mech-drawing',
    title: 'Mechanical Design & Drafting',
    subtitle: 'Engineering Fundamentals',
    iconKey: 'drafting',
    items: [
      {
        name: 'Mechanical Design',
        context: 'Component & fixture modeling (brackets, plates, shafts, helical springs, brake rotors, and powertrain assemblies).',
      },
      {
        name: 'Engineering Drawing',
        context: 'Reading and interpreting production drawings, dimensioning, tolerancing, and 1:1 TechDraw projection sheets.',
      },
    ],
  },
  {
    id: 'cnc-mfg',
    title: 'CNC & G-Code Fundamentals',
    subtitle: 'Shop-Floor Execution & Metrology',
    iconKey: 'cnc',
    items: [
      {
        name: 'CNC Operation & G-Code Basics',
        context: 'Machine setup, tool offset adjustments, basic G-code editing, and edge-break awareness for steel & spring production.',
        tag: 'Shop-Floor',
      },
      {
        name: 'Inspection & Quality Control',
        context: 'Tolerance compliance verification using vernier calipers and micrometers; material wastage reduction.',
      },
    ],
  },
  {
    id: 'reverse-eng',
    title: 'Reverse Engineering & Metrology',
    subtitle: 'Measurement to Parametric CAD',
    iconKey: 'mechanics',
    items: [
      {
        name: 'Physical Part Capture',
        context: 'Converting caliper/micrometer measurements and spring sample dimensions into repeatable parametric CAD models.',
      },
      {
        name: 'Automotive Measurement Exposure',
        context: '3D wheel alignment software & hardware calibration testing during internship at Manatec Electronics.',
      },
    ],
  },
  {
    id: 'cs-tools',
    title: 'Engineering Computing & Web',
    subtitle: 'B.Tech CSE Foundation',
    iconKey: 'code',
    items: [
      {
        name: 'Python & CAD Automation',
        context: 'Parametric FreeCAD macros, automated STEP/STL verification scripts, Blender bpy scripting, and data analysis.',
      },
      {
        name: 'Web & Tools',
        context: 'HTML, CSS, JavaScript, PHP, SQL, Git, VS Code, and Jupyter Notebook.',
      },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: 'CNC Machine Operator & Design Support',
    org: 'Venkateshwara Steels and Springs Pvt Ltd',
    period: '2026',
    bullets: [
      'Operated CNC machines and managed setup, tool offsets, and basic G-code editing for steel and spring component production.',
      'Read and interpreted engineering drawings; inspected finished parts using vernier caliper and micrometer for tolerance compliance.',
      'Supported the design team with 2D drafting and 3D modeling of components and fixtures in AutoCAD and FreeCAD.',
      'Coordinated with production to uphold quality standards, minimize material wastage, and meet delivery schedules.',
    ],
  },
  {
    role: '3D Wheel Alignment Intern',
    org: 'Manatec Electronics Pvt. Ltd.',
    period: 'Aug 2025',
    bullets: [
      'Assisted in testing and calibration of 3D wheel alignment software and hardware tools, gaining direct exposure to automotive measurement systems.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    org: 'Cognifyz Technologies',
    period: 'Jul – Aug 2025',
    bullets: [
      'Built responsive web pages using HTML, CSS, and JavaScript and improved UI components and user experience.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'Nexila Technologies',
    period: 'Mar – Apr 2026',
    bullets: [
      'Performed data analysis, visualization, data preprocessing, and built ML models using Python.',
    ],
  },
];

export const EDUCATION_AND_CERTS = {
  education: [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      institution: 'Rajiv Gandhi College of Engineering & Technology',
      meta: 'Pursuing Final Year  |  CGPA: 7.4',
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: "St. Joseph's Higher Secondary School",
      meta: '2023  |  51%',
    },
    {
      degree: 'Class X (Secondary)',
      institution: "St. Joseph's Higher Secondary School",
      meta: '2020  |  70%',
    },
  ],
  softwareProject: {
    title: 'Smart Parking Management System',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    summary:
      'Web-based application developed to monitor parking slot availability in real time, featuring user registration, slot booking, and an admin management dashboard backed by PHP and SQL.',
  },
  certifications: [
    'Python for Data Science — NPTEL',
    'Cloud Computing — NPTEL',
    'Features of Java — Infosys Springboard',
  ],
  languages: ['English (Fluent)', 'Tamil (Fluent)'],
};
