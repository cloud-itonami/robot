(ns etzhayyim.wasm.robot.state
  "App state for the robot appview UI. Ported 1:1 from the former
  appview/robot-mcp-component/svelte/src/routes/+page.svelte template
  shell — a single static screen describing the app surface (title /
  project / routes / bindings / source path). Single reagent atom,
  murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Robot Mcp Component"
          :project "etzhayyim-project-robot"
          :name "robot-mcp-component"
          :kind "appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-robot/appview/robot-mcp-component/svelte/src/routes/+page.svelte"}}))
