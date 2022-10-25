import {useCallback, useState, useEffect} from "react"
import {AnimatePresence, motion} from "framer-motion"

import {logoObj} from "./logo"
import {useInterval} from "./use-interval"

const data = [
    {l: "postgres", r: "hubspot"},

    {l: "databricks", r: "azure"},
    {l: "harmonic", r: "airtable"},
    {l: "smartsheet", r: "customerio"},
    {l: "intercom", r: "azurecosmos"},
    {l: "segment", r: "googleads"},
    {l: "googlesheets", r: "s3"},
    {l: "azuresynapse", r: "chargebee"},

    {l: "bigquery", r: "intercom"},

    {l: "dialpad", r: "awsathena"},
    {l: "salesforce", r: "azuresynapse"},
    {l: "freshdesk", r: "segment"},
    {l: "api", r: "hubspot"},
    {l: "iterable", r: "stripe"},
    {l: "redshift", r: "affinity"},
    {l: "mongodb", r: "databricks"},

    {l: "snowflake", r: "marketo"},

    {l: "smartsheet", r: "dialpad"},
    {l: "customerio", r: "redshift"},
    {l: "segment", r: "harmonic"},
    {l: "hubspot", r: "klaviyo"},
    {l: "intercom", r: "googlesheets"},
    {l: "postgres", r: "mysql"},
    {l: "awsathena", r: "facebook"},

    {l: "mongodb", r: "salesforce"},

    {l: "chargebee", r: "hubspot"},
    {l: "azurecosmos", r: "googleads"},
    {l: "netsuite", r: "smartsheet"},
    {l: "databricks", r: "awsathena"},
    {l: "harmonic", r: "facebook"},
    {l: "affinity", r: "redshift"},
    {l: "api", r: "klaviyo"},

    {l: "salesforce", r: "bigquery"},

    {l: "azuresynapse", r: "hubspot"},
    {l: "zendesk", r: "googleads"},
    {l: "azurecosmos", r: "facebook"},
    {l: "api", r: "harmonic"},
    {l: "smartsheet", r: "databricks"},
    {l: "netsuite", r: "stripe"},
    {l: "mysql", r: "intercom"},

    {l: "netsuite", r: "salesforce"},

    {l: "mysql", r: "postgres"},
    {l: "iterable", r: "facebook"},
    {l: "bigquery", r: "customerio"},
    {l: "databricks", r: "smartsheet"},
    {l: "harmonic", r: "azure"},
    {l: "klaviyo", r: "intercom"},
    {l: "freshdesk", r: "segment"},

    {l: "netsuite", r: "snowflake"},

    {l: "dialpad", r: "bigquery"},
    {l: "salesforce", r: "harmonic"},
    {l: "postgres", r: "airtable"},
    {l: "googleads", r: "googlesheets"},
    {l: "awsathena", r: "webhook"},
    {l: "redshift", r: "mysql"},
    {l: "databricks", r: "api"},

    {l: "zendesk", r: "snowflake"},

    {l: "netsuite", r: "klaviyo"},
    {l: "databricks", r: "freshdesk"},
    {l: "intercom", r: "dialpad"},
    {l: "amplitude", r: "customerio"},
    {l: "stripe", r: "postgres"},
    {l: "azure", r: "mysql"},
    {l: "redshift", r: "iterable"},

    {l: "api", r: "bigquery"},

    {l: "mongodb", r: "marketo"},
    {l: "hubspot", r: "chargebee"},
    {l: "customerio", r: "webhook"},
    {l: "airtable", r: "iterable"},
    {l: "googlesheets", r: "postgres"},
    {l: "salesforce", r: "harmonic"},
    {l: "databricks", r: "klaviyo"},

    {l: "airtable", r: "affinity"},

    {l: "azure", r: "hubspot"},
    {l: "salesforce", r: "zendesk"},
    {l: "segment", r: "awsathena"},
    {l: "s3", r: "chargebee"},
    {l: "freshdesk", r: "bigquery"},
    {l: "api", r: "amplitude"},
    {l: "facebook", r: "smartsheet"},

    {l: "stripe", r: "redshift"},

    {l: "databricks", r: "airtable"},
    {l: "hubspot", r: "dialpad"},
    {l: "segment", r: "zendesk"},
    {l: "s3", r: "awsathena"},
    {l: "amplitude", r: "bigquery"},
    {l: "azure", r: "affinity"},
    {l: "azuresynapse", r: "klaviyo"},

    {l: "salesforce", r: "googlesheets"},

    {l: "snowflake", r: "netsuite"},
    {l: "facebook", r: "stripe"},
    {l: "mysql", r: "chargebee"},
    {l: "postgres", r: "affinity"},
    {l: "awsathena", r: "airtable"},
    {l: "klaviyo", r: "freshdesk"},
    {l: "webhook", r: "azurecosmos"},

    {l: "chargebee", r: "intercom"},

    {l: "snowflake", r: "salesforce"},
    {l: "freshdesk", r: "webhook"},
    {l: "s3", r: "googlesheets"},
    {l: "stripe", r: "iterable"},
    {l: "harmonic", r: "azurecosmos"},
    {l: "netsuite", r: "klaviyo"},
    {l: "affinity", r: "customerio"},

    {l: "postgres", r: "bigquery"},

    {l: "googleads", r: "iterable"},
    {l: "netsuite", r: "azuresynapse"},
    {l: "harmonic", r: "zendesk"},
    {l: "intercom", r: "databricks"},
    {l: "chargebee", r: "airtable"},
    {l: "googlesheets", r: "awsathena"},
    {l: "affinity", r: "segment"},

    {l: "salesforce", r: "webhook"},

    {l: "databricks", r: "s3"},
    {l: "postgres", r: "segment"},
    {l: "redshift", r: "affinity"},
    {l: "klaviyo", r: "webhook"},
    {l: "azurecosmos", r: "freshdesk"},
    {l: "awsathena", r: "azuresynapse"},
    {l: "facebook", r: "smartsheet"},

    {l: "stripe", r: "s3"},

    {l: "mysql", r: "bigquery"},
    {l: "webhook", r: "snowflake"},
    {l: "chargebee", r: "azure"},
    {l: "databricks", r: "googlesheets"},
    {l: "freshdesk", r: "netsuite"},
    {l: "airtable", r: "hubspot"},
    {l: "salesforce", r: "api"}
]

function wrap(min, max, v) {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const props = {
    className: "slot-icon",
    transition: {
        ease: [0.25, 0.1, 0.25, 1],
        opacity: {duration: 0.2}
    },
    initial: "enter",
    animate: "center",
    exit: "exit",
    whileHover: "hovered"
}

const variants = {
    center: {
        y: 0,
        scale: 1,
        opacity: 1
    },
    hovered: {
        scale: 1.18,
        rotate: 6,
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 30
        }
    }
}

const CYCLE_LENGTH = 8
const SLOT_MS = 250 // in ms
const HOVER_MS = 1500
const PAUSE_MS = 3000 // in ms

const DISTANCE = 36 // in px
const TRAVEL_SCALE = 0.667 // % as decimal

export function Hero() {
    const [hover, setHover] = useState(false)

    const [{page, delay}, setPage] = useState({page: 0, delay: HOVER_MS})

    const idx = wrap(0, data.length, page)

    const addHover = useCallback(() => {
        setHover(true)
        setPage((prev) => ({page: prev.page, delay: HOVER_MS}))
    }, [])
    const removeHover = useCallback(() => {
        setHover(false)
    }, [])

    useInterval(
        () => {
            setPage(({page, delay}) => {
                if (page + 1 === data.length) {
                    return {page: 0, delay: PAUSE_MS}
                }
                if (page === 0) {
                    return {page: page + 1, delay: SLOT_MS}
                }
                if ((page + 1) % CYCLE_LENGTH === 0) {
                    return {page: page + 1, delay: PAUSE_MS}
                }
                return {page: page + 1, delay: SLOT_MS}
            })
            // start on index 0 where it in the pause state
            // flips through filler logos until index 7 (8th) and pauses
            // -- if any hovering happens, it should pause but then continue after interval
            // -- should only ever auto-pause on the chosen 8ths
        },
        hover ? null : delay
    )

    return (
        <>
            <h1 className="heading">Sync</h1>
            <div className="slot">
                <AnimatePresence initial={false}>
                    <motion.a
                        key={page}
                        variants={{
                            ...variants,
                            enter: {
                                y: -DISTANCE,
                                scale: TRAVEL_SCALE,
                                opacity: 0
                            },
                            exit: {
                                y: DISTANCE,
                                scale: TRAVEL_SCALE,
                                opacity: 0
                            }
                        }}
                        href="https://www.polytomic.com/integrations"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        onPointerOver={addHover}
                        onPointerOut={removeHover}
                        {...props}
                    >
                        {logoObj[data[idx].l]?.logo}
                    </motion.a>
                    {hover && <Label label={data[idx].l} />}
                </AnimatePresence>
            </div>
            <h1 className="heading">to</h1>
            <div className="slot">
                <AnimatePresence initial={false}>
                    <motion.a
                        key={page}
                        variants={{
                            ...variants,
                            enter: {
                                y: DISTANCE,
                                scale: TRAVEL_SCALE,
                                opacity: 0
                            },
                            exit: {
                                y: -DISTANCE,
                                scale: TRAVEL_SCALE,
                                opacity: 0
                            }
                        }}
                        href="https://www.polytomic.com/integrations"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        onPointerOver={addHover}
                        onPointerOut={removeHover}
                        {...props}
                    >
                        {logoObj[data[idx].r]?.logo}
                    </motion.a>
                    {hover && <Label label={data[idx].r} />}
                </AnimatePresence>
            </div>
        </>
    )
}

function Label(props) {
    return (
        <motion.span
            variants={{
                invisible: {opacity: 0},
                visible: {opacity: 1}
            }}
            transition={{opacity: {duration: 0.1}}}
            initial="invisible"
            animate="visible"
            exit="invisible"
            className="slot-label-wrapper"
        >
            <span className="slot-label">{logoObj[props.label]?.label || props.label}</span>
        </motion.span>
    )
}
