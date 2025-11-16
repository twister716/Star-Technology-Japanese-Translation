ServerEvents.recipes(event => {
    const id = global.id;

    // Parts

            event.recipes.gtceu.assembly_line(id('prismalic_helix_core'))
                .itemInputs('gtceu:void_frame', 'kubejs:draco_advanced_soc', 'kubejs:runic_wave_generator', '32x gtceu:fine_ancient_runicalium_wire',
                    '32x gtceu:fine_stellarium_wire', '32x gtceu:fine_melodium_wire', '32x gtceu:fine_prismalium_wire', '32x gtceu:fine_dragonsteel_wire', 
                    '32x gtceu:fine_twinite_wire', '32x gtceu:fine_shellite_wire', '32x gtceu:fine_enderium_wire', '32x gtceu:fine_lumium_wire', 
                    '32x gtceu:fine_signalum_wire', '32x gtceu:fine_soul_infused_wire')
                .inputFluids('gtceu:utopian_akreyrium 5000','gtceu:indium_tin_lead_cadmium_soldering_alloy 2880')
                .itemOutputs('kubejs:prismalic_helix_core')
                .duration(900)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of('kubejs:runic_wave_generator'))
                        .EUt(GTValues.VHA[GTValues.UHV])
                        .CWUt(160)
                    )
                .EUt(GTValues.VHA[GTValues.UEV]);

            event.recipes.gtceu.assembly_line(id('pisma_helical_nucleus'))
                .itemInputs('gtceu:nyanium_frame', '3x kubejs:prismalic_helix_core', '2x gtceu:dense_hvga_steel_plate', '2x gtceu:soul_ascendant_cuperite_rod',
                    '2x gtceu:uiv_sensor', '32x kubejs:uipic_chip')
                .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 5472','gtceu:naquadated_soldering_alloy 4384','gtceu:dragon_breath 2500')
                .itemOutputs('kubejs:prisma_helical_nucleus')
                .duration(1200)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of('kubejs:prismalic_helix_core'))
                        .EUt(GTValues.VHA[GTValues.UEV])
                        .CWUt(192)
                    )
                .EUt(GTValues.VHA[GTValues.UIV]);

    // Controller

        event.recipes.gtceu.assembly_line(id('threading_controller'))
            .itemInputs('start_core:uiv_absolute_parallel_hatch', '2x #gtceu:circuits/uxv', '2x kubejs:prisma_helical_nucleus', '8x gtceu:lepton_resonant_thallium_antimonide_double_cable')
            .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 27360','gtceu:naquadated_soldering_alloy 21920','gtceu:pure_dragon_breath 5000')
            .itemOutputs('start_core:threading_controller')
            .duration(1500)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('kubejs:prisma_helical_nucleus'))
                    .EUt(GTValues.VHA[GTValues.UEV])
                    .CWUt(216)
                )
            .EUt(GTValues.VA[GTValues.UIV]);

    // Machines

        //

        event.recipes.gtceu.assembly_line(id('multithreaded_component_synthesis_forge'))
            .itemInputs('kubejs:core_casing', '36x #gtceu:circuits/uxv', '48x gtceu:component_nexus', '48x gtceu:component_part_hub',
                '40x gtceu:uiv_assembler', '40x gtceu:uiv_scanner', '24x kubejs:prisma_helical_nucleus', '48x gtceu:uiv_fluid_regulator',
                '24x gtceu:uiv_field_generator', '16x gtceu:uiv_sensor', '56x kubejs:uiv_micropower_router', '48x gtceu:nyanium_screw',
                '64x kubejs:uipic_chip','64x kubejs:uipic_chip','64x kubejs:uipic_chip','64x kubejs:uipic_chip')
            .inputFluids('gtceu:nyanium 2400000','gtceu:pure_dragon_breath 540000','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 540000','gtceu:naquadated_soldering_alloy 432432')
            .itemOutputs('gtceu:multithreaded_component_synthesis_forge')
            .duration(248647)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('gtceu:component_nexus'))
                    .EUt(GTValues.VHA[GTValues.UIV])
                    .CWUt(256)
                )
            .EUt(GTValues.VA[GTValues.UXV]);

    // Helixes

        // Gen 1 = Basic Frame + Core + Tier Stuff
        // Special 1 = Gen 1 + Core + Tier Stuff + Specializer
        // Gen 2 = Better Frame + All Special 1 + Core + Tier Stuff
            // All Special = 1 Overdrive + 1 Coprocessor + 1 Weaving
        // Special 2 = Gen 2 + Core + Tier Stuff + Specializer
        // Gen 3 = Betterer Frame + All Special 2 + Core + Tier Stuff
        // Special 3 = Gen 3 + Core + Tier Stuff + Specializer
        // Gen 4 = Betterest Frame + All Special 3 + Core + Tier Stuff

        event.recipes.gtceu.assembler(id('uv_supreme_thread_helix'))
            .itemInputs('gtceu:void_frame', '3x #gtceu:circuits/uhv', '2x kubejs:prismalic_helix_core', 
                '1x gtceu:uv_field_generator', '32x gtceu:uhpic_chip')
            .inputFluids('gtceu:naquadria 6912')
            .itemOutputs(`start_core:uv_supreme_thread_helix`)
            .duration(800)
            .EUt(GTValues.VA[GTValues.UHV]);

        const SpecialAssemblyHelix = (type,specializer) => {

            event.recipes.gtceu.assembly_line(id(`uhv_${type}_thread_helix`))
                .itemInputs('start_core:uv_supreme_thread_helix', '3x #gtceu:circuits/uev', 'kubejs:prismalic_helix_core', 
                    '1x gtceu:uhv_field_generator', `kubejs:uhv_${specializer}`, '2x kubejs:uhv_high_strength_panel')
                .inputFluids('gtceu:naquadria 13824', 'gtceu:polyether_ether_ketone 4608')
                .itemOutputs(`start_core:uhv_${type}_thread_helix`)
                .stationResearch(
                    researchRecipeBuilder => researchRecipeBuilder
                        .researchStack(Item.of('kubejs:prismalic_helix_core'))
                        .EUt(GTValues.VA[GTValues.UHV])
                        .CWUt(128)
                    )
                .duration(600)
                .EUt(GTValues.VA[GTValues.UEV]);

        };

        SpecialAssemblyHelix('overdrive','transmission_assembly');
        SpecialAssemblyHelix('coprocessor','catalyst_core');
        SpecialAssemblyHelix('weaving','computational_matrix');

        event.recipes.gtceu.assembly_line(id(`uev_supreme_thread_helix`))
            .itemInputs('gtceu:draconyallium_frame', '3x #gtceu:circuits/uiv', 'kubejs:prismalic_helix_core', '1x gtceu:uev_field_generator', 
                `start_core:uhv_overdrive_thread_helix`, `start_core:uhv_coprocessor_thread_helix`, `start_core:uhv_weaving_thread_helix`, '2x kubejs:uev_high_strength_panel')
            .inputFluids('gtceu:isovol 13824', 'gtceu:polyether_ether_ketone 4608')
            .itemOutputs(`start_core:uev_supreme_thread_helix`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('start_core:uv_supreme_thread_helix'))
                    .EUt(GTValues.VA[GTValues.UEV])
                    .CWUt(160)
                )
            .duration(800)
            .EUt(GTValues.VA[GTValues.UIV]);

        // === Needs K.O.M.A.R.U ===
        // Special 2+, Gen 3+
        // Worry About It

});