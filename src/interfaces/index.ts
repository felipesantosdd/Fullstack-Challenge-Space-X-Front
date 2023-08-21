interface LaunchCount {
    id: string;
    launchs: number;
}
export interface IStatus {
    success: number;
    failure: number;
    launchCounts: LaunchCount[];
}

interface Height {
    meters: number;
    feet: number;
}
interface Mass {
    kg: number;
    lb: number;
}
interface Thrustsealevel {
    kN: number;
    lbf: number;
}
interface Firststage {
    thrust_sea_level: Thrustsealevel;
    thrust_vacuum: Thrustsealevel;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
}
interface Compositefairing {
    height: Height;
    diameter: Height;
}
interface Payloads {
    composite_fairing: Compositefairing;
    option_1: string;
}
interface Secondstage {
    thrust: Thrustsealevel;
    payloads: Payloads;
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
}
interface Isp {
    sea_level: number;
    vacuum: number;
}
interface Engines {
    isp: Isp;
    thrust_sea_level: Thrustsealevel;
    thrust_vacuum: Thrustsealevel;
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
}
interface Landinglegs {
    number: number;
    material?: any;
}
interface Payloadweight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}
export interface IRockets {
    height: Height;
    diameter: Height;
    mass: Mass;
    first_stage: Firststage;
    second_stage: Secondstage;
    engines: Engines;
    landing_legs: Landinglegs;
    payload_weights: Payloadweight[];
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    wikipedia: string;
    description: string;
    id: string;
}

interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: any[];
}
interface Patch {
    small: string;
    large: string;
    _id: string;
}
interface Reddit {
    campaign?: any;
    launch?: any;
    media?: any;
    recovery?: any;
    _id: string;
}
interface Flickr {
    small: any[];
    original: any[];
    _id: string;
}
interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit?: any;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
    _id: string;
}
interface Failure {
    time: number;
    altitude?: any;
    reason: string;
}
interface Core {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success?: any;
    landing_type?: any;
    landpad?: any;
    _id: string;
}
export interface ILauncher {
    _id: string;
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: Failure[];
    details: string;
    crew: any[];
    ships: any[];
    capsules: any[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id?: any;
    id: string;
    __v: number;
}
export interface IPage {
    results: ILauncher[];
    totalDocs: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}
