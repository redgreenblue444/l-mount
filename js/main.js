// Panasonic Lumix camera data
const cameras = [
    {
        id: 's1r',
        name: 'Lumix S1R',
        nickname: 'The Resolution Powerhouse',
        tagline: 'The flagship high-resolution full-frame camera with 47.3MP sensor',
        price: 3699,
        priceRange: 'pro',
        sensor: '47.3MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine',
        autofocus: '225-area DFD (Depth From Defocus) AF',
        continuousShooting: '9 fps (mechanical), 6 fps (AF-C)',
        maxFPS: 9,
        video: '4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14 stops',
        batteryLife: 380,
        weight: 1021,
        memory: 'Dual slots (SD + XQD)',
        standoutFeatures: [
            'Highest resolution in Lumix lineup (47.3MP)',
            '6-stop Dual I.S. 2 image stabilization',
            'Weather-sealed magnesium alloy body',
            'High-resolution mode up to 187MP',
            '4K 60p video recording',
            'Excellent L-mount lens compatibility'
        ],
        bestFor: [
            'Landscape photographers',
            'Portrait and studio photographers',
            'Commercial photographers',
            'Photographers needing maximum detail'
        ],
        whyChoose: 'The S1R delivers exceptional resolution and image quality, making it perfect for photographers who need maximum detail, large prints, or professional commercial work. Its robust build and excellent video capabilities make it a true flagship camera.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1R%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: true
    },
    {
        id: 's1h',
        name: 'Lumix S1H',
        nickname: 'The Cinema Beast',
        tagline: 'The professional cinema camera in a mirrorless body',
        price: 3999,
        priceRange: 'pro',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine',
        autofocus: '225-area DFD AF',
        continuousShooting: '9 fps (mechanical), 6 fps (AF-C)',
        maxFPS: 9,
        video: '6K @ 24p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 400,
        weight: 1052,
        memory: 'Dual slots (SD + XQD)',
        standoutFeatures: [
            '6K video recording capability',
            'Cinema 4K recording',
            'V-Log with 14+ stops dynamic range',
            'Anamorphic video support',
            'Active cooling system for extended recording',
            'Professional video features'
        ],
        bestFor: [
            'Professional videographers',
            'Cinematographers',
            'Content creators',
            'Hybrid shooters needing best video'
        ],
        whyChoose: 'The S1H is Panasonic\'s flagship video camera, offering cinema-grade features in a mirrorless body. With 6K recording, V-Log, and professional video tools, it\'s unmatched for serious video work.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1H%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's1',
        name: 'Lumix S1',
        nickname: 'The Versatile Workhorse',
        tagline: 'The balanced full-frame camera for photography and video',
        price: 2499,
        priceRange: 'premium',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine',
        autofocus: '225-area DFD AF',
        continuousShooting: '9 fps (mechanical), 6 fps (AF-C)',
        maxFPS: 9,
        video: '4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14 stops',
        batteryLife: 380,
        weight: 1021,
        memory: 'Dual slots (SD + XQD)',
        standoutFeatures: [
            'Excellent balance of photo and video',
            '6-stop Dual I.S. 2',
            'Weather-sealed construction',
            '4K 60p video',
            'High-resolution mode up to 96MP',
            'Robust build quality'
        ],
        bestFor: [
            'General photography enthusiasts',
            'Hybrid shooters',
            'Professional photographers',
            'Travel photographers'
        ],
        whyChoose: 'The S1 offers the perfect balance of photography and video capabilities. With excellent image quality, robust build, and professional features, it\'s ideal for photographers who need versatility.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    },
    {
        id: 's5iix',
        name: 'Lumix S5IIX',
        nickname: 'The Creator\'s Choice',
        tagline: 'The compact full-frame camera optimized for content creators',
        price: 2199,
        priceRange: 'premium',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '7 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 370,
        weight: 740,
        memory: 'Dual SD card slots',
        standoutFeatures: [
            'Phase Detection AF (first Lumix with PDAF)',
            '6K video recording',
            'Compact and lightweight for full-frame',
            'USB-C SSD recording',
            'Active cooling for video',
            'Excellent for vlogging'
        ],
        bestFor: [
            'Content creators',
            'Vloggers',
            'Hybrid shooters',
            'Photographers wanting compact full-frame'
        ],
        whyChoose: 'The S5IIX combines phase detection autofocus with 6K video and compact size, making it perfect for content creators who need professional quality in a portable package.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S5IIX%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.68M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's5ii',
        name: 'Lumix S5II',
        nickname: 'The Hybrid Hero',
        tagline: 'The compact full-frame camera with phase detection AF',
        price: 1999,
        priceRange: 'premium',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '7 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 370,
        weight: 740,
        memory: 'Dual SD card slots',
        standoutFeatures: [
            'Phase Detection AF (first Lumix with PDAF)',
            '6K video recording',
            'Compact and lightweight',
            '5-stop Dual I.S. 2',
            'Weather-sealed body',
            'Excellent value'
        ],
        bestFor: [
            'Hybrid shooters',
            'Content creators',
            'Travel photographers',
            'Photographers wanting modern AF'
        ],
        whyChoose: 'The S5II brings phase detection autofocus to Lumix cameras, dramatically improving AF performance. Combined with 6K video and compact size, it\'s an excellent all-around camera.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S5II%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.68M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's5',
        name: 'Lumix S5',
        nickname: 'The Compact Full-Frame',
        tagline: 'The affordable entry into full-frame photography',
        price: 1699,
        priceRange: 'mid',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine',
        autofocus: '225-area DFD AF',
        continuousShooting: '7 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14 stops',
        batteryLife: 370,
        weight: 714,
        memory: 'Dual SD card slots',
        standoutFeatures: [
            'Most affordable full-frame Lumix',
            'Compact and lightweight',
            '4K 60p video',
            '5-stop Dual I.S. 2',
            'Weather-sealed body',
            'Excellent value proposition'
        ],
        bestFor: [
            'Budget-conscious full-frame users',
            'Hybrid shooters',
            'Travel photographers',
            'Content creators'
        ],
        whyChoose: 'The S5 offers full-frame image quality at an accessible price point. It\'s compact, feature-rich, and perfect for photographers stepping into full-frame photography.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S5%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '2.36M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    },
    {
        id: 'g9ii',
        name: 'Lumix G9II',
        nickname: 'The Speed Master',
        tagline: 'The flagship Micro Four Thirds camera for speed and action',
        price: 1899,
        priceRange: 'premium',
        sensor: '25.2MP Micro Four Thirds Live MOS',
        sensorType: 'm43',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '10 fps (mechanical), 60 fps (electronic)',
        maxFPS: 60,
        video: '5.8K @ 30p, 4K @ 60p, Full HD @ 120p',
        videoDynamicRange: 'V-Log: ~13 stops',
        batteryLife: 390,
        weight: 658,
        memory: 'Dual SD card slots',
        standoutFeatures: [
            'Fastest shooting in Lumix lineup (60 fps)',
            'Phase Detection AF',
            'Pre-burst mode',
            '8-stop Dual I.S. 2',
            'Weather-sealed body',
            'Excellent for wildlife and sports'
        ],
        bestFor: [
            'Sports photographers',
            'Wildlife photographers',
            'Action photographers',
            'Photographers needing speed'
        ],
        whyChoose: 'The G9II is Panasonic\'s speed demon, offering incredible burst rates and phase detection AF. Perfect for capturing fast action with Micro Four Thirds portability.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix G9II%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.68M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: false,
        fortyMP: false
    },
    {
        id: 'gh6',
        name: 'Lumix GH6',
        nickname: 'The Video Specialist',
        tagline: 'The Micro Four Thirds camera optimized for video production',
        price: 2199,
        priceRange: 'premium',
        sensor: '25.2MP Micro Four Thirds Live MOS',
        sensorType: 'm43',
        processor: 'Venus Engine',
        autofocus: '225-area DFD AF',
        continuousShooting: '14 fps (mechanical), 75 fps (electronic)',
        maxFPS: 75,
        video: '5.8K @ 60p, 4K @ 120p, Full HD @ 300p',
        videoDynamicRange: 'V-Log: ~13+ stops',
        batteryLife: 360,
        weight: 823,
        memory: 'Dual slots (SD + CFexpress Type B)',
        standoutFeatures: [
            '5.8K 60p video recording',
            '4K 120p slow motion',
            'Active cooling system',
            'CFexpress Type B support',
            'Professional video features',
            'Excellent for video production'
        ],
        bestFor: [
            'Professional videographers',
            'Content creators',
            'Video production',
            'Hybrid shooters prioritizing video'
        ],
        whyChoose: 'The GH6 is Panasonic\'s video-focused Micro Four Thirds camera, offering exceptional video capabilities including 5.8K recording and 4K 120p slow motion.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix GH6%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '3.68M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's9',
        name: 'Lumix S9',
        nickname: 'The Compact Creator',
        tagline: 'The ultra-compact full-frame camera for content creators',
        price: 1499,
        priceRange: 'mid',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '7 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 370,
        weight: 486,
        memory: 'Single SD card slot',
        standoutFeatures: [
            'Ultra-compact full-frame design',
            'Phase Detection AF',
            '6K video recording',
            'Compact and lightweight',
            '5-stop Dual I.S. 2',
            'Perfect for vlogging and travel'
        ],
        bestFor: [
            'Content creators',
            'Vloggers',
            'Travel photographers',
            'Photographers wanting smallest full-frame'
        ],
        whyChoose: 'The S9 is Panasonic\'s most compact full-frame camera, offering professional image quality in an ultra-portable package perfect for content creators and travelers.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S9%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: false,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: false,
        evfResolution: 'N/A',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's1rii',
        name: 'Lumix S1R II',
        nickname: 'The Resolution Master',
        tagline: 'The next-generation high-resolution full-frame flagship',
        price: 3999,
        priceRange: 'pro',
        sensor: '47.3MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '9 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 400,
        weight: 1021,
        memory: 'Dual slots (SD + CFexpress Type B)',
        standoutFeatures: [
            'Highest resolution in Lumix lineup (47.3MP)',
            'Phase Detection AF',
            '6-stop Dual I.S. 2 image stabilization',
            'Weather-sealed magnesium alloy body',
            'High-resolution mode up to 187MP',
            '6K video recording',
            'CFexpress Type B support'
        ],
        bestFor: [
            'Landscape photographers',
            'Portrait and studio photographers',
            'Commercial photographers',
            'Photographers needing maximum detail'
        ],
        whyChoose: 'The S1R II is the evolution of the S1R, combining the highest resolution sensor with modern phase detection autofocus and improved video capabilities for the ultimate professional camera.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1R II%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: true
    },
    {
        id: 's1ii',
        name: 'Lumix S1 II',
        nickname: 'The Professional Hybrid',
        tagline: 'The next-generation balanced full-frame camera',
        price: 2699,
        priceRange: 'pro',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '9 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 400,
        weight: 1021,
        memory: 'Dual slots (SD + CFexpress Type B)',
        standoutFeatures: [
            'Phase Detection AF',
            'Excellent balance of photo and video',
            '6-stop Dual I.S. 2',
            'Weather-sealed construction',
            '6K video recording',
            'High-resolution mode up to 96MP',
            'Robust build quality'
        ],
        bestFor: [
            'General photography enthusiasts',
            'Hybrid shooters',
            'Professional photographers',
            'Travel photographers'
        ],
        whyChoose: 'The S1 II builds upon the S1 with phase detection autofocus and improved video capabilities, offering the perfect balance of photography and video in a professional package.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1 II%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    },
    {
        id: 's1iie',
        name: 'Lumix S1 II E',
        nickname: 'The Enhanced Professional',
        tagline: 'The enhanced version of the S1 II with extended features',
        price: 2899,
        priceRange: 'pro',
        sensor: '24.2MP Full-Frame CMOS',
        sensorType: 'fullframe',
        processor: 'Venus Engine with Phase Detection AF',
        autofocus: '779-area Hybrid AF (Phase + Contrast)',
        continuousShooting: '9 fps (mechanical), 30 fps (electronic)',
        maxFPS: 30,
        video: '6K @ 30p, 4K @ 60p, Full HD @ 180p',
        videoDynamicRange: 'V-Log: ~14+ stops',
        batteryLife: 400,
        weight: 1021,
        memory: 'Dual slots (SD + CFexpress Type B)',
        standoutFeatures: [
            'Phase Detection AF',
            'USB-C SSD recording',
            'Active cooling for video',
            '6-stop Dual I.S. 2',
            'Weather-sealed construction',
            '6K video recording',
            'Enhanced video features'
        ],
        bestFor: [
            'Professional videographers',
            'Hybrid shooters',
            'Content creators',
            'Photographers needing extended video capabilities'
        ],
        whyChoose: 'The S1 II E is the enhanced version of the S1 II, adding USB-C SSD recording and active cooling for extended video work, making it perfect for professional hybrid shooters.',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ELumix S1 II E%3C/text%3E%3C/svg%3E',
        ibis: true,
        dualCards: true,
        weatherSeal: true,
        filmSimDial: false,
        builtInFlash: false,
        evf: true,
        evfResolution: '5.76M dots',
        screenType: 'Fully Articulating',
        eightKVideo: false,
        fourK120fps: true,
        fortyMP: false
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCameraProfiles();
    populateComparisonTables();
    setupFilters();
    setupComparisonTool();
    setupSmoothScroll();
    setupStickyNav();
});

// Render camera profiles
function renderCameraProfiles() {
    const container = document.getElementById('camera-profiles');
    container.innerHTML = cameras.map(camera => createCameraCard(camera)).join('');
}

// Create camera card HTML
function createCameraCard(camera) {
    const priceDisplay = camera.price >= 1000 
        ? `$${camera.price.toLocaleString()}` 
        : `$${camera.price}`;
    
    return `
        <article class="camera-card" data-price="${camera.priceRange}" data-sensor="${camera.sensorType}">
            <div class="camera-image">
                <img src="${camera.image}" alt="${camera.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${camera.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="camera-content">
                <h3>${camera.name} - ${camera.nickname}</h3>
                <p class="tagline">${camera.tagline}</p>
                <div class="camera-specs">
                    <div class="spec-item">
                        <span class="spec-label">💰 Price:</span>
                        <span class="spec-value">${priceDisplay} (body only)</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📐 Sensor:</span>
                        <span class="spec-value">${camera.sensor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">⚡ Processor:</span>
                        <span class="spec-value">${camera.processor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📸 Continuous:</span>
                        <span class="spec-value">${camera.continuousShooting}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">🎥 Video:</span>
                        <span class="spec-value">${camera.video}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">📊 Video Dynamic Range:</span>
                        <span class="spec-value">${camera.videoDynamicRange || 'N/A'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">🔋 Battery:</span>
                        <span class="spec-value">~${camera.batteryLife} shots</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">⚖️ Weight:</span>
                        <span class="spec-value">${camera.weight}g</span>
                    </div>
                </div>
                <div class="standout-features">
                    <h4>✨ Standout Features</h4>
                    <ul>
                        ${camera.standoutFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="best-for">
                    <h4>🎯 Best Suited For</h4>
                    <ul>
                        ${camera.bestFor.map(use => `<li>${use}</li>`).join('')}
                    </ul>
                </div>
                <div class="why-choose">
                    <h4>💡 Why Choose ${camera.name}?</h4>
                    <p>${camera.whyChoose}</p>
                </div>
            </div>
        </article>
    `;
}

// Populate comparison tables
function populateComparisonTables() {
    populateSpecTable();
    populateSizeTable();
    populateBatteryTable();
    populateFeatureMatrix();
    populateComparisonSelects();
}

function populateSpecTable() {
    const tbody = document.getElementById('spec-table-body');
    tbody.innerHTML = cameras.map(camera => `
        <tr>
            <td><strong>${camera.name}</strong></td>
            <td>$${camera.price.toLocaleString()}</td>
            <td>${camera.sensor.includes('47.3') ? '47.3MP' : camera.sensor.includes('25.2') ? '25.2MP' : '24.2MP'}</td>
            <td>${camera.maxFPS}${camera.maxFPS >= 30 ? '*' : ''}</td>
            <td>${camera.video.split(',')[0]}</td>
            <td>${camera.ibis ? '✅' : '❌'}</td>
            <td>${camera.weatherSeal ? '✅' : '❌'}</td>
            <td>${camera.dualCards ? '✅' : '❌'}</td>
        </tr>
    `).join('');
}

function populateSizeTable() {
    const tbody = document.getElementById('size-table-body');
    tbody.innerHTML = cameras.map(camera => `
        <tr>
            <td><strong>${camera.name}</strong></td>
            <td>${camera.weight}g</td>
            <td>${camera.screenType}</td>
            <td>${camera.evfResolution}</td>
        </tr>
    `).join('');
}

function populateBatteryTable() {
    const tbody = document.getElementById('battery-table-body');
    const sorted = [...cameras].sort((a, b) => b.batteryLife - a.batteryLife);
    tbody.innerHTML = sorted.map(camera => {
        let notes = '';
        if (camera.batteryLife >= 390) notes = 'Excellent';
        else if (camera.batteryLife >= 370) notes = 'Very Good';
        else if (camera.batteryLife >= 360) notes = 'Good';
        else notes = 'Average';
        
        return `
            <tr>
                <td><strong>${camera.name}</strong></td>
                <td>~${camera.batteryLife}</td>
                <td>${notes}</td>
            </tr>
        `;
    }).join('');
}

function populateFeatureMatrix() {
    const tbody = document.getElementById('feature-matrix-body');
    const features = [
        { name: 'IBIS', key: 'ibis' },
        { name: 'Dual Card Slots', key: 'dualCards' },
        { name: '47MP+ Sensor', key: 'fortyMP' },
        { name: 'Fully Articulating Screen', key: 'screenType', value: 'Fully Articulating' },
        { name: 'Weather Sealing', key: 'weatherSeal' },
        { name: 'EVF', key: 'evf' },
        { name: '4K 120fps', key: 'fourK120fps' },
        { name: 'Phase Detection AF', key: 'autofocus', value: 'Phase' }
    ];
    
    tbody.innerHTML = features.map(feature => {
        const cells = cameras.map(camera => {
            let hasFeature = false;
            if (feature.value) {
                hasFeature = camera[feature.key] && camera[feature.key].includes(feature.value);
            } else {
                hasFeature = camera[feature.key] === true;
            }
            return hasFeature ? '✅' : '❌';
        }).join('');
        
        return `
            <tr>
                <td><strong>${feature.name}</strong></td>
                ${cells.split('').map(cell => `<td>${cell}</td>`).join('')}
            </tr>
        `;
    }).join('');
}

function populateComparisonSelects() {
    const select1 = document.getElementById('compare-camera-1');
    const select2 = document.getElementById('compare-camera-2');
    
    cameras.forEach(camera => {
        const option1 = document.createElement('option');
        option1.value = camera.id;
        option1.textContent = camera.name;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = camera.id;
        option2.textContent = camera.name;
        select2.appendChild(option2);
    });
}

// Setup filters
function setupFilters() {
    const priceFilter = document.getElementById('price-filter');
    const sensorFilter = document.getElementById('sensor-filter');
    
    priceFilter.addEventListener('change', applyFilters);
    sensorFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const priceValue = document.getElementById('price-filter').value;
    const sensorValue = document.getElementById('sensor-filter').value;
    const cards = document.querySelectorAll('.camera-card');
    
    cards.forEach(card => {
        const priceMatch = priceValue === 'all' || card.dataset.price === priceValue;
        const sensorMatch = sensorValue === 'all' || card.dataset.sensor === sensorValue;
        
        if (priceMatch && sensorMatch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// Setup comparison tool
function setupComparisonTool() {
    const compareBtn = document.getElementById('compare-btn');
    compareBtn.addEventListener('click', performComparison);
}

function performComparison() {
    const camera1Id = document.getElementById('compare-camera-1').value;
    const camera2Id = document.getElementById('compare-camera-2').value;
    
    if (!camera1Id || !camera2Id) {
        alert('Please select both cameras to compare.');
        return;
    }
    
    if (camera1Id === camera2Id) {
        alert('Please select two different cameras.');
        return;
    }
    
    const camera1 = cameras.find(c => c.id === camera1Id);
    const camera2 = cameras.find(c => c.id === camera2Id);
    
    const resultsDiv = document.getElementById('comparison-results');
    resultsDiv.innerHTML = `
        <div class="comparison-side-by-side">
            <div class="comparison-camera">
                <h4>${camera1.name}</h4>
                <img src="${camera1.image}" alt="${camera1.name}" loading="lazy" onerror="this.style.display='none'">
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera1.price.toLocaleString()}</td></tr>
                    <tr><td>Sensor</td><td>${camera1.sensor}</td></tr>
                    <tr><td>Max FPS</td><td>${camera1.maxFPS}</td></tr>
                    <tr><td>Video</td><td>${camera1.video}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera1.videoDynamicRange || 'N/A'}</td></tr>
                    <tr><td>Battery</td><td>~${camera1.batteryLife} shots</td></tr>
                    <tr><td>Weight</td><td>${camera1.weight}g</td></tr>
                    <tr><td>IBIS</td><td>${camera1.ibis ? '✅' : '❌'}</td></tr>
                    <tr><td>Weather Seal</td><td>${camera1.weatherSeal ? '✅' : '❌'}</td></tr>
                    <tr><td>Dual Cards</td><td>${camera1.dualCards ? '✅' : '❌'}</td></tr>
                </table>
            </div>
            <div class="comparison-camera">
                <h4>${camera2.name}</h4>
                <img src="${camera2.image}" alt="${camera2.name}" loading="lazy" onerror="this.style.display='none'">
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera2.price.toLocaleString()}</td></tr>
                    <tr><td>Sensor</td><td>${camera2.sensor}</td></tr>
                    <tr><td>Max FPS</td><td>${camera2.maxFPS}</td></tr>
                    <tr><td>Video</td><td>${camera2.video}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera2.videoDynamicRange || 'N/A'}</td></tr>
                    <tr><td>Battery</td><td>~${camera2.batteryLife} shots</td></tr>
                    <tr><td>Weight</td><td>${camera2.weight}g</td></tr>
                    <tr><td>IBIS</td><td>${camera2.ibis ? '✅' : '❌'}</td></tr>
                    <tr><td>Weather Seal</td><td>${camera2.weatherSeal ? '✅' : '❌'}</td></tr>
                    <tr><td>Dual Cards</td><td>${camera2.dualCards ? '✅' : '❌'}</td></tr>
                </table>
            </div>
        </div>
    `;
    
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Setup smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Setup sticky navigation
function setupStickyNav() {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('sticky-nav');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}
