// Camera data loaded from JSON files
let cameras = [];
const cameraFiles = [
    'cameras/s9.json',
    'cameras/s5ii.json',
    'cameras/s5iix.json',
    'cameras/g9ii.json',
    'cameras/gh7.json',
    'cameras/s1ii.json',
    'cameras/s1iie.json',
    'cameras/s1rii.json'
];

// Load all camera JSON files
async function loadCameras() {
    try {
        const promises = cameraFiles.map(file => 
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to load ${file}`);
                    return response.json();
                })
                .then(data => {
                    // Add ID for identification
                    data.id = file.split('/')[1].replace('.json', '');
                    return data;
                })
        );
        cameras = await Promise.all(promises);
        cameras.sort((a, b) => a.price.msrp - b.price.msrp);
        initializePage();
    } catch (error) {
        console.error('Error loading camera data:', error);
        document.getElementById('camera-profiles').innerHTML = 
            '<p class="error">Error loading camera specifications. Please refresh the page.</p>';
    }
}

// Initialize the page
function initializePage() {
    renderCameraProfiles();
    populateComparisonTables();
    setupFilters();
    setupComparisonTool();
    setupSmoothScroll();
    setupStickyNav();
}

// Render camera profiles
function renderCameraProfiles() {
    const container = document.getElementById('camera-profiles');
    container.innerHTML = cameras.map(camera => createCameraCard(camera)).join('');
}

// Create camera card HTML
function createCameraCard(camera) {
    const priceDisplay = `$${camera.price.msrp.toLocaleString()}`;
    const sensorInfo = `${camera.sensor.resolution} ${camera.sensor.size} ${camera.sensor.type}`;
    const dimensions = camera.physical.dimensions;
    const dimStr = `${dimensions.width} × ${dimensions.height} × ${dimensions.depth} ${dimensions.unit}`;
    
    // Determine price range for filtering
    let priceRange = 'pro';
    if (camera.price.msrp < 1600) priceRange = 'mid';
    else if (camera.price.msrp < 2500) priceRange = 'premium';
    
    // Determine sensor type for filtering
    const sensorType = camera.sensor.size === 'Full-Frame' ? 'fullframe' : 'm43';
    
    // Get max FPS
    const maxFPS = Math.max(
        camera.shooting.mechanical_shutter.max_fps,
        camera.shooting.electronic_shutter.max_fps
    );
    
    // Video summary
    const maxRes = camera.video.max_resolution.toLowerCase().replace(/[.\s]/g, '_');
    const videoFormat = camera.video.formats[maxRes] || Object.values(camera.video.formats)[0];
    const videoSummary = camera.video.max_resolution + ' @ ' + 
        (videoFormat?.frame_rates?.[0] || 'N/A') + 'p';
    
    return `
        <article class="camera-card" data-price="${priceRange}" data-sensor="${sensorType}">
            <div class="camera-content">
                <h3>${camera.model}</h3>
                <div class="camera-specs">
                    <div class="spec-item">
                        <span class="spec-label">Price:</span>
                        <span class="spec-value">${priceDisplay} (${camera.price.currency})</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Release Year:</span>
                        <span class="spec-value">${camera.release_year}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Mount:</span>
                        <span class="spec-value">${camera.mount}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Sensor:</span>
                        <span class="spec-value">${sensorInfo}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Effective Pixels:</span>
                        <span class="spec-value">${(camera.sensor.effective_pixels / 1000000).toFixed(1)}MP</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Processor:</span>
                        <span class="spec-value">${camera.processor}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Autofocus:</span>
                        <span class="spec-value">${camera.autofocus.type}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Focus Points:</span>
                        <span class="spec-value">${camera.autofocus.focus_points}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Low Light AF:</span>
                        <span class="spec-value">${camera.autofocus.low_light_sensitivity}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Image Stabilization:</span>
                        <span class="spec-value">${camera.image_stabilization.type}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Dual I.S. Rating:</span>
                        <span class="spec-value">${camera.image_stabilization.dual_is_rating}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Mechanical Shutter:</span>
                        <span class="spec-value">${camera.shooting.mechanical_shutter.max_fps} fps</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Electronic Shutter:</span>
                        <span class="spec-value">${camera.shooting.electronic_shutter.max_fps} fps</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Shutter Speed Range:</span>
                        <span class="spec-value">${camera.shooting.mechanical_shutter.shutter_speed_range}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Video Max Resolution:</span>
                        <span class="spec-value">${videoSummary}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Video Dynamic Range:</span>
                        <span class="spec-value">${camera.video.dynamic_range}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Active Cooling:</span>
                        <span class="spec-value">${camera.video.active_cooling ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">USB-C SSD Recording:</span>
                        <span class="spec-value">${camera.video.external_recording.usb_c_ssd ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Display:</span>
                        <span class="spec-value">${camera.display.rear_screen.size}" ${camera.display.rear_screen.type}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Display Resolution:</span>
                        <span class="spec-value">${(camera.display.rear_screen.resolution / 1000000).toFixed(1)}M dots</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">EVF:</span>
                        <span class="spec-value">${camera.display.evf.present ? 
                            `${(camera.display.evf.resolution / 1000000).toFixed(2)}M dots, ${camera.display.evf.magnification}x` : 
                            'None'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Storage Slots:</span>
                        <span class="spec-value">${camera.storage.slots}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Storage Type:</span>
                        <span class="spec-value">${camera.storage.slot_1}${camera.storage.slot_2 ? ', ' + camera.storage.slot_2 : ''}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">CFexpress Support:</span>
                        <span class="spec-value">${camera.storage.cfexpress ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Connectivity:</span>
                        <span class="spec-value">Wi-Fi, Bluetooth, ${camera.connectivity.usb}, ${camera.connectivity.hdmi}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Battery:</span>
                        <span class="spec-value">${camera.battery.type} (${camera.battery.capacity})</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">CIPA Battery Rating:</span>
                        <span class="spec-value">${camera.battery.cipa_rating} shots</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">USB Charging:</span>
                        <span class="spec-value">${camera.battery.usb_charging ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Weight:</span>
                        <span class="spec-value">${camera.physical.weight}${camera.physical.weight_unit}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Dimensions:</span>
                        <span class="spec-value">${dimStr}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Weather Sealing:</span>
                        <span class="spec-value">${camera.physical.weather_sealing ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Construction:</span>
                        <span class="spec-value">${camera.physical.construction}</span>
                    </div>
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
    tbody.innerHTML = cameras.map(camera => {
        const maxFPS = Math.max(
            camera.shooting.mechanical_shutter.max_fps,
            camera.shooting.electronic_shutter.max_fps
        );
        const maxRes = camera.video.max_resolution.toLowerCase().replace(/[.\s]/g, '_');
        const videoFormat = camera.video.formats[maxRes] || Object.values(camera.video.formats)[0];
        const videoSummary = camera.video.max_resolution + ' @ ' + 
            (videoFormat?.frame_rates?.[0] || 'N/A') + 'p';
        
        return `
            <tr>
                <td><strong>${camera.model}</strong></td>
                <td>$${camera.price.msrp.toLocaleString()}</td>
                <td>${camera.sensor.resolution}</td>
                <td>${maxFPS}</td>
                <td>${videoSummary}</td>
                <td>${camera.image_stabilization.type ? 'Yes' : 'No'}</td>
                <td>${camera.physical.weather_sealing ? 'Yes' : 'No'}</td>
                <td>${camera.storage.slots > 1 ? 'Yes' : 'No'}</td>
            </tr>
        `;
    }).join('');
}

function populateSizeTable() {
    const tbody = document.getElementById('size-table-body');
    tbody.innerHTML = cameras.map(camera => {
        const dim = camera.physical.dimensions;
        const dimStr = `${dim.width} × ${dim.height} × ${dim.depth} ${dim.unit}`;
        const evfRes = camera.display.evf.present ? 
            `${(camera.display.evf.resolution / 1000000).toFixed(2)}M dots` : 
            'N/A';
        
        return `
            <tr>
                <td><strong>${camera.model}</strong></td>
                <td>${camera.physical.weight}${camera.physical.weight_unit}</td>
                <td>${dimStr}</td>
                <td>${camera.display.rear_screen.type}</td>
                <td>${evfRes}</td>
            </tr>
        `;
    }).join('');
}

function populateBatteryTable() {
    const tbody = document.getElementById('battery-table-body');
    tbody.innerHTML = cameras.map(camera => `
        <tr>
            <td><strong>${camera.model}</strong></td>
            <td>${camera.battery.type}</td>
            <td>${camera.battery.cipa_rating} shots</td>
            <td>${camera.battery.usb_charging ? 'Yes' : 'No'}</td>
        </tr>
    `).join('');
}

function populateFeatureMatrix() {
    const tbody = document.getElementById('feature-matrix-body');
    const features = [
        { name: 'IBIS', key: 'image_stabilization', check: (c) => c.image_stabilization.type !== null },
        { name: 'Dual Card Slots', key: 'storage', check: (c) => c.storage.slots > 1 },
        { name: '47MP+ Sensor', key: 'sensor', check: (c) => c.sensor.effective_pixels >= 47000000 },
        { name: 'Fully Articulating Screen', key: 'display', check: (c) => c.display.rear_screen.type === 'Fully Articulating' },
        { name: 'Weather Sealing', key: 'physical', check: (c) => c.physical.weather_sealing },
        { name: 'EVF', key: 'display', check: (c) => c.display.evf.present },
        { name: '4K 120fps', key: 'video', check: (c) => {
            const formats = c.video.formats;
            const fourK = formats['4k'];
            return fourK?.frame_rates?.includes(120) || false;
        }},
        { name: 'Phase Detection AF', key: 'autofocus', check: (c) => c.autofocus.type.includes('Phase') },
        { name: 'USB-C SSD Recording', key: 'video', check: (c) => c.video.external_recording.usb_c_ssd },
        { name: 'Active Cooling', key: 'video', check: (c) => c.video.active_cooling },
        { name: 'CFexpress Support', key: 'storage', check: (c) => c.storage.cfexpress }
    ];
    
    tbody.innerHTML = features.map(feature => {
        const cells = cameras.map(camera => {
            const hasFeature = feature.check(camera);
            return hasFeature ? 'Yes' : 'No';
        }).join('');
        
        return `
            <tr>
                <td><strong>${feature.name}</strong></td>
                ${cells.split('').map((cell, i) => {
                    const camera = cameras[i];
                    const hasFeature = feature.check(camera);
                    return `<td>${hasFeature ? 'Yes' : 'No'}</td>`;
                }).join('')}
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
        option1.textContent = camera.model;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = camera.id;
        option2.textContent = camera.model;
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
                <h4>${camera1.model}</h4>
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera1.price.msrp.toLocaleString()}</td></tr>
                    <tr><td>Release Year</td><td>${camera1.release_year}</td></tr>
                    <tr><td>Mount</td><td>${camera1.mount}</td></tr>
                    <tr><td>Sensor</td><td>${camera1.sensor.resolution} ${camera1.sensor.size}</td></tr>
                    <tr><td>Effective Pixels</td><td>${(camera1.sensor.effective_pixels / 1000000).toFixed(1)}MP</td></tr>
                    <tr><td>Max FPS (Mech)</td><td>${camera1.shooting.mechanical_shutter.max_fps}</td></tr>
                    <tr><td>Max FPS (Elec)</td><td>${camera1.shooting.electronic_shutter.max_fps}</td></tr>
                    <tr><td>Video Max Res</td><td>${camera1.video.max_resolution}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera1.video.dynamic_range}</td></tr>
                    <tr><td>IBIS</td><td>${camera1.image_stabilization.type}</td></tr>
                    <tr><td>Dual I.S. Rating</td><td>${camera1.image_stabilization.dual_is_rating}</td></tr>
                    <tr><td>Battery (CIPA)</td><td>${camera1.battery.cipa_rating} shots</td></tr>
                    <tr><td>Weight</td><td>${camera1.physical.weight}${camera1.physical.weight_unit}</td></tr>
                    <tr><td>Weather Sealing</td><td>${camera1.physical.weather_sealing ? 'Yes' : 'No'}</td></tr>
                    <tr><td>Storage Slots</td><td>${camera1.storage.slots}</td></tr>
                    <tr><td>USB-C SSD</td><td>${camera1.video.external_recording.usb_c_ssd ? 'Yes' : 'No'}</td></tr>
                    <tr><td>Active Cooling</td><td>${camera1.video.active_cooling ? 'Yes' : 'No'}</td></tr>
                </table>
            </div>
            <div class="comparison-camera">
                <h4>${camera2.model}</h4>
                <table class="comparison-details">
                    <tr><td>Price</td><td>$${camera2.price.msrp.toLocaleString()}</td></tr>
                    <tr><td>Release Year</td><td>${camera2.release_year}</td></tr>
                    <tr><td>Mount</td><td>${camera2.mount}</td></tr>
                    <tr><td>Sensor</td><td>${camera2.sensor.resolution} ${camera2.sensor.size}</td></tr>
                    <tr><td>Effective Pixels</td><td>${(camera2.sensor.effective_pixels / 1000000).toFixed(1)}MP</td></tr>
                    <tr><td>Max FPS (Mech)</td><td>${camera2.shooting.mechanical_shutter.max_fps}</td></tr>
                    <tr><td>Max FPS (Elec)</td><td>${camera2.shooting.electronic_shutter.max_fps}</td></tr>
                    <tr><td>Video Max Res</td><td>${camera2.video.max_resolution}</td></tr>
                    <tr><td>Video Dynamic Range</td><td>${camera2.video.dynamic_range}</td></tr>
                    <tr><td>IBIS</td><td>${camera2.image_stabilization.type}</td></tr>
                    <tr><td>Dual I.S. Rating</td><td>${camera2.image_stabilization.dual_is_rating}</td></tr>
                    <tr><td>Battery (CIPA)</td><td>${camera2.battery.cipa_rating} shots</td></tr>
                    <tr><td>Weight</td><td>${camera2.physical.weight}${camera2.physical.weight_unit}</td></tr>
                    <tr><td>Weather Sealing</td><td>${camera2.physical.weather_sealing ? 'Yes' : 'No'}</td></tr>
                    <tr><td>Storage Slots</td><td>${camera2.storage.slots}</td></tr>
                    <tr><td>USB-C SSD</td><td>${camera2.video.external_recording.usb_c_ssd ? 'Yes' : 'No'}</td></tr>
                    <tr><td>Active Cooling</td><td>${camera2.video.active_cooling ? 'Yes' : 'No'}</td></tr>
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

// Load cameras when DOM is ready
document.addEventListener('DOMContentLoaded', loadCameras);
