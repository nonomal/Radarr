namespace NzbDrone.Core.DecisionEngine;

public enum DownloadRejectionReason
{
    Unknown,
    UnknownMovie,
    UnableToParse,
    Error,
    DecisionError,
    Availability,
    MinimumAgeDelay,
    MovieNotMonitored,
    HistoryRecentCutoffMet,
    HistoryCdhDisabledCutoffMet,
    HistoryHigherPreference,
    HistoryHigherRevision,
    HistoryCutoffMet,
    HistoryCustomFormatCutoffMet,
    HistoryCustomFormatScore,
    HistoryCustomFormatScoreIncrement,
    HistoryUpgradesNotAllowed,
    NoMatchingTag,
    PropersDisabled,
    ProperForOldFile,
    WrongMovie,
    UnknownRuntime,
    BelowMinimumSize,
    AboveMaximumSize,
    AlreadyImportedSameHash,
    AlreadyImportedSameName,
    IndexerDisabled,
    Blocklisted,
    CustomFormatMinimumScore,
    MinimumFreeSpace,
    HardcodeSubtitles,
    WantedLanguage,
    MaximumSizeExceeded,
    MinimumAge,
    MaximumAge,
    Sample,
    ProtocolDisabled,
    QualityNotWanted,
    QualityUpgradesDisabled,
    QueueHigherPreference,
    QueueHigherRevision,
    QueueCutoffMet,
    QueueCustomFormatCutoffMet,
    QueueCustomFormatScore,
    QueueCustomFormatScoreIncrement,
    QueueUpgradesNotAllowed,
    QueuePropersDisabled,
    Raw,
    MustContainMissing,
    MustNotContainPresent,
    RepackDisabled,
    RepackUnknownReleaseGroup,
    RepackReleaseGroupDoesNotMatch,
    RequiredFlags,
    MinimumSeeders,
    DiskHigherPreference,
    DiskHigherRevision,
    DiskCutoffMet,
    DiskCustomFormatCutoffMet,
    DiskCustomFormatScore,
    DiskCustomFormatScoreIncrement,
    DiskUpgradesNotAllowed
}
