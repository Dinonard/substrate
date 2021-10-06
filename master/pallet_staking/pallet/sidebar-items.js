initSidebarItems({"enum":[["Call","Contains one variant per dispatchable that can be called by an extrinsic."],["Error","Custom dispatch errors of this pallet."],["Event","The event emitted by this pallet."]],"struct":[["GenesisConfig","Can be used to configure the genesis state of this pallet."],["Pallet","The pallet implementing the on-chain logic."],["_GeneratedPrefixForStorageActiveEra",""],["_GeneratedPrefixForStorageBonded",""],["_GeneratedPrefixForStorageCanceledSlashPayout",""],["_GeneratedPrefixForStorageCounterForNominators",""],["_GeneratedPrefixForStorageCounterForValidators",""],["_GeneratedPrefixForStorageCurrentEra",""],["_GeneratedPrefixForStorageCurrentPlannedSession",""],["_GeneratedPrefixForStorageErasRewardPoints",""],["_GeneratedPrefixForStorageErasStakers",""],["_GeneratedPrefixForStorageErasStakersClipped",""],["_GeneratedPrefixForStorageErasStartSessionIndex",""],["_GeneratedPrefixForStorageErasTotalStake",""],["_GeneratedPrefixForStorageErasValidatorPrefs",""],["_GeneratedPrefixForStorageErasValidatorReward",""],["_GeneratedPrefixForStorageForceEra",""],["_GeneratedPrefixForStorageInvulnerables",""],["_GeneratedPrefixForStorageLedger",""],["_GeneratedPrefixForStorageMaxNominatorsCount",""],["_GeneratedPrefixForStorageMaxValidatorsCount",""],["_GeneratedPrefixForStorageMinNominatorBond",""],["_GeneratedPrefixForStorageMinValidatorBond",""],["_GeneratedPrefixForStorageMinimumValidatorCount",""],["_GeneratedPrefixForStorageNominators",""],["_GeneratedPrefixForStorageOffendingValidators",""],["_GeneratedPrefixForStoragePayee",""],["_GeneratedPrefixForStorageSlashRewardFraction",""],["_GeneratedPrefixForStorageUnappliedSlashes",""],["_GeneratedPrefixForStorageValidatorCount",""],["_GeneratedPrefixForStorageValidators",""]],"trait":[["Config","Configuration trait of this pallet."]],"type":[["ActiveEra","The active era information, it holds index and start."],["Bonded","Map from all locked “stash” accounts to the controller account."],["CanceledSlashPayout","The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance)."],["CounterForNominators","A tracker to keep count of the number of items in the `Nominators` map."],["CounterForValidators","A tracker to keep count of the number of items in the `Validators` map."],["CurrentEra","The current era index."],["CurrentPlannedSession","The last planned session scheduled by the session pallet."],["ErasRewardPoints","Rewards for the last `HISTORY_DEPTH` eras. If reward hasn’t been set or has been removed then 0 reward is returned."],["ErasStakers","Exposure of validator at era."],["ErasStakersClipped","Clipped Exposure of validator at era."],["ErasStartSessionIndex","The session index at which the era start for the last `HISTORY_DEPTH` eras."],["ErasTotalStake","The total amount staked for the last `HISTORY_DEPTH` eras. If total hasn’t been set or has been removed then 0 stake is returned."],["ErasValidatorPrefs","Similar to `ErasStakers`, this holds the preferences of validators."],["ErasValidatorReward","The total validator era payout for the last `HISTORY_DEPTH` eras."],["ForceEra","Mode of era forcing."],["Invulnerables","Any validators that may never be slashed or forcibly kicked. It’s a Vec since they’re easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets."],["Ledger","Map from all (unlocked) “controller” accounts to the info regarding the staking."],["MaxNominatorsCount","The maximum nominator count before we stop allowing new validators to join."],["MaxValidatorsCount","The maximum validator count before we stop allowing new validators to join."],["MinNominatorBond","The minimum active bond to become and maintain the role of a nominator."],["MinValidatorBond","The minimum active bond to become and maintain the role of a validator."],["MinimumValidatorCount","Minimum number of staking participants before emergency conditions are imposed."],["Module","Type alias to `Pallet`, to be used by `construct_runtime`."],["Nominators","The map from nominator stash key to the set of stash keys of all validators to nominate."],["OffendingValidators","Indices of validators that have offended in the active era and whether they are currently disabled."],["Payee","Where the reward payment should be made. Keyed by stash."],["SlashRewardFraction","The percentage of the slash that is distributed to reporters."],["UnappliedSlashes","All unapplied slashes that are queued for later."],["ValidatorCount","The ideal number of staking participants."],["Validators","The map from (wannabe) validator stash key to the preferences of that validator."]]});